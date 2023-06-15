import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import {Routes, Route, BrowserRouter} from 'react-router-dom';

function App() {

  const enableDarkmode = () => {
      if(mode === "light"){
        setMode("dark");
        document.body.style.backgroundColor = "grey"
        document.title = 'TextUtils - DarkMode'
      }
      else{
        setMode("light");
        document.body.style.backgroundColor = "white"
        document.title = 'TextUtils - LightMode'
      }
  }

  const [mode, setMode] = useState('light');

  return (
    <BrowserRouter>
      <Navbar title= "TextUtils" aboutText="About us" mode={mode} enableDarkmode={enableDarkmode} />
      <Routes>
      <Route path='/' element={ <TextForm heading="Enter text to analyze" mode={mode}/>}/>  
      <Route path='/about' element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
