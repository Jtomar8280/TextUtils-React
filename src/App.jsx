import './App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import TextArea from './components/TextArea';
import { useState } from 'react';

function App() {

  const [color, setColor] = useState('#052b46');
    
  const changeColor = (e) =>{
    setColor(e.target.value)
  }

  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = color;
      document.body.style.color = "white";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };

  return(
    <>
      {/*<Navbar title="Textutils" about="About Textutils" color={color} changeColor={changeColor} toggleMode={toggleMode} mode={mode}/>
      <TextArea mode={mode} color={color}/>
      <About/>*/}
        <Navbar title="Textutils" about="About Textutils" color={color} changeColor={changeColor} toggleMode={toggleMode} mode={mode}/>
        <div className='container py-4'>
          <TextArea mode={mode} color={color}/>
        </div>
    </>
  );
}

export default App;
