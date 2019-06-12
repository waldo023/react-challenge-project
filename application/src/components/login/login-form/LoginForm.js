import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends Component {
  state = {
    login: "",
    password: "",
  }

  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="inputEmail">Email</label>
          <input type="email" className="form-control" id="inputEmail" placeholder="test@test.com"></input>
        </div>
        <div className="form-group">
          <label htmlFor="inputPassword">Password</label>
          <input type="password" className="form-control" id="inputPassword"></input>
        </div>
        <div className="d-flex justify-content-center">
          <Link to={'/order'}>
            <button type="submit" className="btn btn-primary">Login</button>
          </Link>
        </div>
      </form>
    );
  }
}

export default LoginForm;