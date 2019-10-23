import React from "react";
import FormInput from "./Form-input";
import "./signupandsignin.scss";

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
  };
  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className='sign-in'>
        <h2>我已有账户</h2>
        <p>I already have an account</p>
        <br />
        <span>输入邮箱和密码登录</span>
        <br />
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type='email'
            name='email'
            value={this.state.email}
            id='email'
            label='邮箱 email'
            handleChange={this.handleChange}
            required
          />
          <FormInput
            type='password'
            name='password'
            label='密码 password'
            value={this.state.password}
            handleChange={this.handleChange}
            id='password'
            required
          />
          <input type='submit' value='提交' />
        </form>
      </div>
    );
  }
}

export default Signin;
