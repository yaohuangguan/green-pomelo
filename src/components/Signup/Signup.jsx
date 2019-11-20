import React from "react";
import { Link, useHistory } from "react-router-dom";
import FormInput from "./Form-input";
import { auth, createUser } from "../../firebase/Firebase";
import "./Signin.scss";
class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      passwordConf: "",
      errors: [],
      send: false
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
    const { displayName, email, password, passwordConf } = this.state;
    if (password !== passwordConf) {
      this.setState(prevState => ({
        errors: ["密码不匹配，请确认", ...prevState.errors]
      }));
      return;
    }
    if (!displayName || !email || !password || !passwordConf) {
      this.setState({
        errors: "请输入完整的账号信息"
      });
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUser(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        passwordConf: "",
        errors: []
      });
    } catch (error) {
      console.log(error);
      if (error.code === "auth/weak-password") {
        this.setState({
          errors: "请输入至少6位以上密码"
        });
      }
      if (error.code === "auth/network-request-failed") {
        this.setState({
          errors: "网络错误，请检查你的网络连接"
        });
      }
      if (error.code === "auth/email-already-in-use") {
        this.setState({
          errors: "邮箱已经被注册了"
        });
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
    const {
      displayName,
      email,
      password,
      passwordConf,
      errors,
      send
    } = this.state;
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
              注册新账户
            </h2>

            <form onSubmit={this.handleSubmit}>
              {errors ? (
                <div className="text-danger font-weight-bold">{errors}</div>
              ) : null}
              <FormInput
                type="text"
                name="displayName"
                value={displayName}
                id="displayName"
                label="用户名"
                handleChange={this.handleChange}
              />{" "}
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
              />{" "}
              <FormInput
                type="password"
                name="passwordConf"
                label="确认密码"
                value={passwordConf}
                handleChange={this.handleChange}
                id="passwordConf"
              />
              <div className="text-center">
                <input
                  type="submit"
                  className="btn btn-warning mr-4"
                  value="注册"
                  disabled={!send}
                />
              </div>
              <Link to="/signin"> 我已有账号，请登录</Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
