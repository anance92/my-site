import './App.css';
import React from 'react';
import Nav from './Components/Nav/index';
import Landing from './Components/Landing/index';
import Footer from './Components/Footer/index';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <main className="App-main">
        <Landing></Landing>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
