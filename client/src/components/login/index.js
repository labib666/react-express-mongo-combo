import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: 'abcd@gmail.com',
      password: 'abcd',
    };
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className="auth-page">
        <div className="container page">
          <div className="row">

            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Login</h1>
              <p className="text-xs-center">
                <Link to="/signup">
                  Need an account?
                </Link>
              </p>

              <form>
                <fieldset>

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

export default Login;
