import React, { lazy } from "react";
import Homepage from "./pages/Homepage";
import { Route, Switch, Redirect } from "react-router-dom";
import { auth, createUser } from "./firebase/Firebase";
import NotFound from "./components/Error/NotFound";
import "./App.scss";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/User/UserAction";
const Shop = lazy(() => import("./pages/Shop/Shop"));
const Header = lazy(() => import("./components/Header/Header"));
const Footer = lazy(() => import("./components/Footer/Footer"));
const Signin = lazy(() => import("./components/Signup/Signin"));
const Signup = lazy(() => import("./components/Signup/Signup"));

class App extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      if (user) {
        const userRef = await createUser(user);
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      } else {
        setCurrentUser(user);
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
          <Header></Header>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/shop" component={Shop} />
            <Route
              exact
              path="/signin"
              render={() =>
                this.props.currentUser ? <Redirect to="/" /> : <Signin />
              }
            />
            <Route
              exact
              path="/signup"
              render={() =>
                this.props.currentUser ? <Redirect to="/" /> : <Signup />
              }
            />
            <Route path="*" component={NotFound}></Route>
          </Switch>
          <Footer></Footer>
        </div>
      </>
    );
  }
}
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
