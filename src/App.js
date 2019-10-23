import React from "react";
import Homepage from "./pages/Homepage";
import { Route, Switch } from "react-router-dom";
import Shop from "./pages/Shop/Shop";
import Header from "./components/Header/Header";
import Signup from "./components/Signup/Signup";
import "./App.scss";

function App() {
  return (
    <div>
      <Header></Header>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={Shop} />
        <Route exact path='/signin' component={Signup} />
      </Switch>
    </div>
  );
}

export default App;
