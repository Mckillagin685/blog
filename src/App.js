import React, { Component } from 'react';
import {Route, withRouter, Switch} from 'react-router-dom';
import './bulma-0.6.1/css/bulma.css';
import './font-awesome-4.7.0/css/font-awesome.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header class="navbar is-transparent">
          <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
              <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
            </a>
            <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div id="navbarExampleTransparentExample" class="navbar-menu">
            <div class="navbar-start">
              <a class="navbar-item" href="https://bulma.io/">
                Home
              </a>
              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link" href="#">
                  Docs
                </a>
                <div class="navbar-dropdown is-boxed">
                  <a class="navbar-item" href="#">
                    Overview
                  </a>
                  <a class="navbar-item" href="#">
                    Modifiers
                  </a>
                  <a class="navbar-item" href="#">
                    Columns
                  </a>
                  <a class="navbar-item" href="#">
                    Layout
                  </a>
                  <a class="navbar-item" href="#">
                    Form
                  </a>
                  <hr class="navbar-divider"/>
                  <a class="navbar-item" href="#">
                    Elements
                  </a>
                  <a class="navbar-item is-active" href="#">
                    Components
                  </a>
                </div>
              </div>
            </div>

            <div class="navbar-end">
              <div class="navbar-item">
                <div class="field is-grouped">
                </div>
              </div>
            </div>
          </div>
        </header>
        <main>
          <p>I am the main</p>
          <body>
             
          </body>
        </main>
        <footer>
         <p>I am the footer</p>
        </footer>
      </div>
    );
  }
}

export default App;
