import React from "react";
import { Link } from "react-router-dom";
import FormInput from "./Form-input";
import Button from "../Custom-button/Button";
import { auth, googleSignIn } from "../../firebase/Firebase";
import "./Signin.scss";
class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      send: false,
      errors: []
    };
  }
  validEmail = () => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(this.state.email);
  };
  getEmail = e => {
    this.setState({ email: e.target.value }, () => {
      this.validEmail()
        ? this.setState({ send: true })
        : this.setState({ send: false });
    });
  };
  handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({ errors: "输入邮箱和密码" });
      return;
    }
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: "",
        password: ""
      });
    } catch (error) {
      console.log(error);
      switch (error.code) {
        case "auth/user-not-found":
          this.setState({ errors: "用户名或密码不正确，请修改" });
          break;
        case "auth/wrong-password":
          this.setState({ errors: "用户名或密码不正确，请修改" });
          break;
        case "auth/network-request-failed":
          this.setState({ errors: "网络故障，请检查你的网络然后重试" });
          break;
        default:
          break;
      }
    }
  };
  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  componentDidMount() {
    document.querySelector(".relative").classList.add("background");
    document.querySelector(".logoText").classList.add("logo-b");
    document.querySelector(".logo").classList.add("text-center");
    document.querySelector(".options").style.display = "none";
    console.log("changed to linear");
  }
  componentWillUnmount() {
    document.querySelector(".logoText").classList.remove("logo-b");
    document.querySelector(".logo").classList.remove("text-center");
    document.querySelector(".relative").classList.remove("background");
    document.querySelector(".options").style.display = "flex";
    console.log("changed away linear");
  }
  render() {
    const { email, password, errors, send } = this.state;
    return (
      <div className="container">
        <br />
        <br />
        <br />
        <br />
        <div className="row flex">
          <div className="start">
            <img
              src={"https://media.giphy.com/media/woIKv4f7TETgQ/giphy.gif"}
              width="100%"
              alt="the"
            />
          </div>
          <div>
            <h2 className="h3-responsive text-center text-white my-4">
              使用账号密码登录
            </h2>

            <form onSubmit={this.handleSubmit}>
              {errors ? <div className="text-danger">{errors}</div> : null}
              <FormInput
                type="email"
                name="email"
                value={email}
                id="email"
                label="邮箱"
                handleChange={this.handleChange}
                onChange={this.getEmail}
              />
              <FormInput
                type="password"
                name="password"
                label="密码"
                value={password}
                handleChange={this.handleChange}
                id="password"
              />
              <div className="text-center">
                <input
                  type="submit"
                  className="btn btn-warning mr-4"
                  value="登录"
                  disabled={!send}
                />
                <h6 className="hr">或</h6>
                <Button onClick={googleSignIn}>
                  <i className="fab fa-google"></i> Google登录
                </Button>
              </div>
              <Link to="/signup"> 我要注册账号</Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signin;
