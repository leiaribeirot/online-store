import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { AiOutlineHome } from 'react-icons/ai';

class HomeIcon extends Component {
  render() {
    return (
      <Link className="home-icon" to="/">
        <AiOutlineHome />
      </Link>
    );
  }
}

export default HomeIcon;
