import React, { Component } from 'react';

class GridBar extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <p>Column size of 3 for small devices</p>
          </div>
          <div className="col-sm-9">
            <p>Column size of 9 for small devices</p>
          </div>
        </div>
      </div>
    );
  }
}

export default GridBar;
