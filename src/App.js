import React from "react";
import Homepage from "./pages/Homepage";
import { Route, Switch } from "react-router-dom";
import Shop from "./pages/Shop/Shop";
import Header from "./components/Header/Header";
import Signin from "./components/Signup/Signup";
import { auth } from "./firebase/firebase";
import "./App.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className='container'>
        <Header currentUser={this.state.currentUser}></Header>
        <br />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/shop' component={Shop} />
          <Route exact path='/signin' component={Signin} />
        </Switch>
      </div>
    );
  }
}

export default App;
