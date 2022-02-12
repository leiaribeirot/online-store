import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Header.css';
import { AiOutlineHome } from 'react-icons/ai';

class IconHome extends Component {
  render() {
    return (
      <Link to="/" className="homeIcon">
        <AiOutlineHome />
      </Link>
    );
  }
}

export default IconHome;