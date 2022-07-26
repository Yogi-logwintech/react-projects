import React, {useState} from 'react';
import './App.css';
import About from './components/About';
import Alerts from './components/Alerts';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }
  const changeMode = () => {
    if(mode === 'light'){ 
      setMode('dark');
      document.body.style.backgroundColor = '#2b2b2b';
      showAlert("Dark mode enabled", "success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled", "success")
    }
  }
  return (
    <>
      <Router>
        <div>
          <Navbar title="TextUtils" aboutText="About" mode={mode} changeMode={changeMode} />
          <Alerts alert={alert} />
          <main>
            <Routes>
              <Route path="/about" element={<About mode={mode} />} />
              <Route path="/" element={<TextForm title="Enter the text to analyze below" showAlert={showAlert} mode={mode} />} />
            </Routes>
          </main>
        </div>
      </Router>
    </>
  );
}

export default App;
