import React, { useState, useEffect } from "react";
import { Route, BrowserRouter, Redirect, Switch } from 'react-router-dom';
import ColorList from './ColorList';
import NewColorForm from './NewColorForm';
import Color from './Color';

const Routes = ({ colors, addColor, deleteColor }) => {

  return (
    <Switch>
      <Route exact path="/colors/new">
        <NewColorForm addColor={addColor} />
      </Route>
      <Route exact path="/colors/:color">
        <Color colors={colors} />
      </Route>
      <Route exact path="/colors">
        <ColorList colors={colors} deleteColor={deleteColor} />
      </Route>
      <Redirect to="/colors" />
    </Switch>
  );
}

export default Routes;