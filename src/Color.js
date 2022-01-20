import React from "react";
import { useParams, Redirect, Link } from "react-router-dom";
import './Color.css';

const Color = ({ colors }) => {
  const { color } = useParams();
  const colorData = colors.find(c => c.name === color);

  return (
    colorData ?
      (<div className="Color">
        <div style={{ 
          color: "white", 
          backgroundColor: `${colorData.color}`,
          height: "200px" }}>
          <h1>This is {color}, its hex code is {colorData.color}</h1>
        </div>
        <Link className="Color-return" to="/colors">Return</Link>
      </div>) :
      (<Redirect to="/colors" />)
  );
}

export default Color;