import React, { lazy } from "react";
import Homepage from "./pages/Homepage";
import { Route, Switch } from "react-router-dom";
import { auth, createUser } from "./firebase/firebase";
import NotFound from "./components/Error/NotFound";
import "./App.scss";
const Shop = lazy(() => import("./pages/Shop/Shop"));
const Header = lazy(() => import("./components/Header/Header"));
const Footer = lazy(() => import("./components/Footer/Footer"));
const Signin = lazy(() => import("./components/Signup/Signin"));
const Signup = lazy(() => import("./components/Signup/Signup"));

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      if (user) {
        const userRef = await createUser(user);
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          });
        });
      } else {
        this.setState({ currentUser: user });
      }
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <>
        <div className="relative">
          <Header currentUser={this.state.currentUser}></Header>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/shop" component={Shop} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/signup" component={Signup} />
            <Route path="*" component={NotFound}></Route>
          </Switch>
          <Footer></Footer>
        </div>
      </>
    );
  }
}

export default App;
