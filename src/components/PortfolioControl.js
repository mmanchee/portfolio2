import React, { useState } from 'react';
import AboutMe from './AboutMe';
import Future from './Future';
import ProjectList from './ProjectList';
import NavBar from './NavBar';


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
      <div className='col-4'>
        <NavBar onChangePage = {changePage}/>
      </div>
      <div className='col-8'>
        {currentlyVisibleState}
      </div>
    </React.Fragment>
  )
}

export default PortfolioControl;