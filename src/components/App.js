import React from 'react';
import Header from './Header';
import Footer from './Footer';
import PortfolioControl from './PortfolioControl';

function App() {
  return (
    <React.Fragment>
      <div>
        <Header />
        <div>
          <PortfolioControl />
        </div>
        <Footer />
      </div>
      
    </React.Fragment>
  );
}

export default App;
