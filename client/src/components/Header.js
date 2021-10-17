import React, { Component } from 'react';

class Header extends Component {
  render = () => (
    <div className="row jumbotron">
      <div className="col-2">
        <h1 className="display-1 d-none d-sm-block">Palatable</h1>
      </div>
      <div className="p-2 col-4 offset-sm-6 offset-md-4 offset-xl-2 ">
        <img src="orange.svg" alt="logo" width="100px" />
      </div>
    </div>
  );
}

export default Header;
