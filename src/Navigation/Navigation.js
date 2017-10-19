import React, { Component } from 'react';


class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-static-top" role="navigation">
        <div className="container">

            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                  <span className="sr-only">Toggle Navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">EIS</a>
            </div>

            <div className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                <li className="active"><a href="#">Form</a></li>
                <li><a href="#">Edid Proflie</a></li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">Help Desk <b className="caret"></b></a>
                  <ul className="dropdown-menu">
                    <li><a href="#">View Tickets</a></li>
                    <li><a href="#">New Tickets</a></li>
                  </ul>
                </li>
              </ul>
            </div>

        </div>
      </nav>
    );
  }
}

export default Navigation;
