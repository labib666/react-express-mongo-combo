import React from 'react';
import { Link } from 'react-router-dom';

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      username: 'abcd',
      email: 'abcd@gmail.com',
      password: 'abcd',
    };
  }

  render() {
    const { username, email, password } = this.state;
    return (
      <div className="auth-page">
        <div className="container page">
          <div className="row">

            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Signup</h1>
              <p className="text-xs-center">
                <Link to="/login">
                  Have an account?
                </Link>
              </p>

              <form>
                <fieldset>

                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="username"
                      placeholder="Username"
                      value={username}/>
                  </fieldset>

                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="email"
                      placeholder="Email"
                      value={email}/>
                  </fieldset>

                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="password"
                      placeholder="Password"
                      value={password}/>
                  </fieldset>

                  <span className="col-md-6 pull-xs-left">
                  <Link to="/">
                    <button
                      className="btn btn-lg btn-primary"
                      type="submit">
                      Home
                    </button>
                  </Link>
                  </span>

                  <button
                    className="btn btn-lg btn-primary pull-xs-right"
                    type="submit">
                    Sign in
                  </button>

                </fieldset>
              </form>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
