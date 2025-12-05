import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';

function App() {
  return (
    <div className="App">
      <Header />
      
      <Banner id="1" title="Nguyen Hieu" description="Banner 1" />
      <Banner id="2" title="Test components" description="banner 222" />
      
      <Footer />
    </div>
  );
}

export default App;
