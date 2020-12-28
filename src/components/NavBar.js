import React from "react";
import PropTypes from 'prop-types';

const NavBar = (props) => {
  const { onChangePage } = props;

  return (
    <React.Fragment>
      <div id='side-nav'>
        <ul>
          <li className='nav-item' onClick = { () => onChangePage('AboutMe') }>About Me</li>
          <li className='nav-item' onClick = { () => onChangePage('ProjectList') }>Projects</li>
          <li className='nav-item' onClick = { () => onChangePage('Future') }>Future Development</li>
        </ul>
      </div>
    </React.Fragment>
  );
}

NavBar.propTypes = {
  onChangePage: PropTypes.func
}

export default NavBar;