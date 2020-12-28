import React from 'react';
import Header from './Header';
import Footer from './Footer';
import NavBar from './NavBar';
import PortfolioControl from './PortfolioControl';

const App = () => {
  
  return (
    <React.Fragment>
      <div id='contain'>
        <Header />
        <div className='row spacing'>
          <PortfolioControl />
        </div>
        <Footer />
      </div>
      
    </React.Fragment>
  );
}

export default App;
