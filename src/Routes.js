import React, { useState, useEffect } from "react";
import { Route, BrowserRouter, Redirect, Switch } from 'react-router-dom';
import ColorList from './ColorList';
import NewColorForm from './NewColorForm';
import Color from './Color';
import { v4 as uuid } from "uuid";

const Routes = () => {

  const [colors, setColors] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("colors") === null) {
      localStorage.setItem("colors", JSON.stringify(colors));
    }
    setColors(() => JSON.parse(localStorage.getItem("colors")));
  }, []);

  const addColor = (color) => {
    const newColors = [...colors, { ...color, id: uuid() }];
    localStorage.setItem("colors", JSON.stringify(newColors));
    setColors(colors => newColors);
  }

  const deleteColor = (name) => {
    const newColors = colors.filter(color => color.name !== name);
    localStorage.setItem("colors", JSON.stringify(newColors));
    setColors(colors => newColors);
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/colors/new">
          <NewColorForm addColor={addColor} />
        </Route>
        <Route exact path="/colors/:color">
          <Color colors={colors} />
        </Route>
        <Route exact path="/colors">
          <ColorList colors={colors} removeColor={deleteColor} />
        </Route>
        <Redirect to="/colors" />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;