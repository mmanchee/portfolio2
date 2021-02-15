import React, { useState } from 'react';
import AboutMe from './AboutMe';
import Future from './Future';
import ProjectList from './ProjectList';
import Header from './Header';
import Footer from './Footer';
import Sample from "./SampleFront";
import { Grid } from '@material-ui/core';


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
  if (page === 'Home') {
    return (
      <React.Fragment>
        <Sample onChangePage = {changePage}/>
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
        <div id='contain' >
          <Grid container direction='column'>
            <Grid item xs={12}>
              <Header onChangePage = {changePage}/>
            </Grid>
            <Grid item container xs={12} justify='center' alignItems='flex-start'>
              <Grid item xs={10} md={8} >
                <div className='mainText'>
                  {currentlyVisibleState}
                </div>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Footer />
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    )
  }
}

export default PortfolioControl;