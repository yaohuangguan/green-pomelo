import React from "react";
import FormInput from "./Form-input";
import Button from "../Custom-button/Button";
import { googleSignIn } from "../../firebase/firebase";
import "./Signin.scss";
import picture from "../../assets/Digitalarts.gif";
class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      send: true
    };
  }
  validEmail = () => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(this.state.email);
  };
  getEmail = e => {
    this.setState({ email: e.target.value }, () => {
      this.validEmail()
        ? this.setState({ send: false })
        : this.setState({ send: true });
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
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
    return (
      <div className='container'>
        <br />
        <br />
        <br />
        <br />
        <div className='row flex'>
          <div className='start'>
            <img src={picture} width='100%' alt='the' />
          </div>
          <div>
            <h2 className='h3-responsive text-center text-white my-4'>
              使用账号密码登录
            </h2>

            <form onSubmit={this.handleSubmit}>
              <FormInput
                type='email'
                name='email'
                value={this.state.email}
                id='email'
                label='邮箱'
                handleChange={this.handleChange}
                onChange={this.getEmail}
                required
              />
              <FormInput
                type='password'
                name='password'
                label='密码'
                value={this.state.password}
                handleChange={this.handleChange}
                id='password'
                required
              />
              <div className='text-center'>
                <input
                  type='submit'
                  className='btn btn-success mr-4'
                  value='登录'
                  disabled={this.state.send}
                />
                <h6 className='hr'>或</h6>
                <Button onClick={googleSignIn}>
                  <i className='fab fa-google'></i> Google登录
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signin;
