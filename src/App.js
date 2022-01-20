import './App.css';
import Routes from './Routes';
import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";


function App() {

  const [colors, setColors] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("colors") === null) {
      localStorage.setItem("colors", JSON.stringify(colors));
    }
    setColors(() => JSON.parse(localStorage.getItem("colors")));
  }, []);

  const addColor = (color) => {
    const newColors = [{ ...color, id: uuid() }, ...colors];
    localStorage.setItem("colors", JSON.stringify(newColors));
    setColors(colors => newColors);
  }

  const deleteColor = (name) => {
    const newColors = colors.filter(color => color.name !== name);
    localStorage.setItem("colors", JSON.stringify(newColors));
    setColors(colors => newColors);
  }

  return (
    <div className="App">
      <Routes colors={colors} addColor={addColor} deleteColor={deleteColor} />
    </div>
  );
}

export default App;
