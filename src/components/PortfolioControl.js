import React from 'react';
import NavBar from './NavBar';
import AboutMe from './AboutMe';
import Future from './Future';
import Projects from './ProjectList';

class PortfolioControl extends React.Component {


  render() {
    currentlyVisibleState = <AboutMe />
    currentlyVisibleState = <Projects />
    currentlyVisibleState = <Future />
    return (
      <React.Fragment>
        <div>
          <NavBar />
        </div>
        <div>
          {currentlyVisibleState}
        </div>
      </React.Fragment>
    );
  }
}

export default PortfolioControl;