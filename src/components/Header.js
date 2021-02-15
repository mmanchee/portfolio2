import React from "react";
import PropTypes from 'prop-types';



const Header = (props) => {
  const { onChangePage } = props;

  return (
    <React.Fragment>
      <div id='header'>
        <div id="header-title">Portfolio</div>
        <div className='nav-box'>
          <a className='nav-item' onClick = { () => onChangePage('Home') }>Home</a>
          <a className='nav-item' onClick = { () => onChangePage('AboutMe') }>About Me</a>
          <a className='nav-item' onClick = { () => onChangePage('ProjectList') }>Projects</a>
          <a className='nav-item' onClick = { () => onChangePage('Future') }>Future Development</a>
          
        </div>
      </div>
    </React.Fragment>
  );
}

Header.propTypes = {
  onChangePage: PropTypes.func
}

export default Header;