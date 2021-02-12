import React, { useState } from 'react';
import AboutMe from './AboutMe';
import Future from './Future';
import ProjectList from './ProjectList';
import Header from './Header';
import Footer from './Footer';


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
      <Header onChangePage = {changePage}/>
      <div className='row spacing justify-content-center'>
        <div className='col-8'>
          {currentlyVisibleState}
        </div>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default PortfolioControl;