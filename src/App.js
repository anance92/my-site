import './App.css';
import React, { useEffect, useState, useRef } from 'react';
import Nav from './Components/Nav/index';
import Landing from './Components/Landing/index';
import Contact from './Components/Contact/index';
import Portfolio from './Components/Portfolio/index';
import Resume from './Components/Resume/index';
import Footer from './Components/Footer/index';

function App() {
  const [currentPage, handlePageChange] = useState('Landing');

  const renderPage = () => {
    switch (currentPage) {
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;
      default:
        return <Landing />
    }
  };

  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvas.Ref.current;
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    const context = canvas.getContext("2D");
    context.scale(2,2);
    context.lineCap = "round";
    context.strokeStyle = "black";
    context.lineWidth = 5;
    contextRef.current = context;
  }, []);

  const startDrawing = ({nativeEvent}) => {
    const {offsetX, offsetY} = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const finishDrawing = () => {

    contextRef.current.closePath();
    setIsDrawing(false);

  };

  const draw = ({nativeEvent}) => {
    if(!isDrawing) {
      return
    }
    
    const {offsetX, offsetY} = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  return (
    <div className="App" >
      <div className="Nav">
        <Nav currentPage={currentPage} handlePageChange={handlePageChange}></Nav>
      </div>
      <main className="App-main">
        {
          renderPage()
        }
        <canvas 
          onMouseDown={startDrawing}
          onMouseUp={finishDrawing}
          onMouseMove={draw}
          ref={canvasRef}
        />
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
