import React, { useState } from 'react';
import NavBar from './NavBar';
import AboutMe from './AboutMe';
import Future from './Future';
import ProjectList from './ProjectList';


const PortfolioControl = () => {
  const [page, setPage] = useState('')

  const changePage = newPage => {
    setPage(newPage);
  }

  let currentlyVisibleState = null;

  switch (page) {
    case 'AboutMe':
      currentlyVisibleState = <AboutMe />
      break;
    case 'ProjectList':
      currentlyVisibleState = <ProjectList />
      break;
    case 'Future':
      currentlyVisibleState = <Future />
      break;
    default:
      currentlyVisibleState = null
  }
  return (
    <React.Fragment>
      {currentlyVisibleState}
    </React.Fragment>
  )
}

export default PortfolioControl;