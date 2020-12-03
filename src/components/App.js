import React from 'react';
import Header from './Header';
import Footer from './Footer';
import PortfolioControl from './PortfolioControl';
import Info from './Info';

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
