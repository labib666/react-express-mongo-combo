import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css';
import logo from '../../assets/images/logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <p>
            Welcome to OMDB Search!
          </p>
          <hr></hr>
          <fieldset>
            <span className="col-md-6 pull-xs-left">
            <Link to="/signup">
              <button
                className="btn btn-lg btn-primary"
                type="submit">
                Signup
              </button>
            </Link>
            </span>
            <span className="col-md-6 pull-xs-right">
            <Link to="/login">
              <button
                className="btn btn-lg btn-primary"
                type="submit">
                Login
              </button>
            </Link>
            </span>
          </fieldset>
        </div>
      </header>
    </div>
  );
}

export default App;
