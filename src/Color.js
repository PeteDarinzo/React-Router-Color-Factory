import React from "react";
import { useParams, Redirect, Link } from "react-router-dom";
import './Color.css';

const Color = ({ colors }) => {
  const { color } = useParams();
  const colorData = colors.find(c => c.sluggified === color);

  return (
    colorData ?
      (<div className="Color">
        <div style={{ 
          color: "white", 
          backgroundColor: `${colorData.color}`,
          height: "200px" }}>
          <h1>This is "{colorData.name}", its hex code is {colorData.color}</h1>
        </div>
        <Link className="Color-return" to="/colors">Return</Link>
      </div>) :
      (<Redirect to="/colors" />)
  );
}

export default Color;