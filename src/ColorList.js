import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import './ColorList.css';

const ColorList = ({ colors, deleteColor }) => {

  return (
    <div className="ColorList">
      <h1>Color Factory</h1>
      <i className="fas fa-palette fa-4x"></i>
      <Link className="ColorList-new" to="/colors/new">Add new color</Link>
      <i className="fas fa-cogs fa-4x"></i>
      <h2>Select A Color</h2>
      <div>
        {colors.map(color => {
          return (<p key={uuid()}>
            <i className="fas fa-paint-brush fa-1x"></i>
            <Link className="ColorList-link" to={`/colors/${color.sluggified}`}>{color.name}</Link>
            <button className="ColorList-remove" onClick={() => deleteColor(color.name)}>X</button>
          </p>)
        })}
      </div>
    </div>
  );
}

export default ColorList;