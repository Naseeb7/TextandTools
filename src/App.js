
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from './Components/About';


function App() {
  const green = {
    backgroundColor: "#A7BEAE",
    color: "black"
  }
  const peach = {
    backgroundColor: "#EEA47FFF",
    color: "#00539CFF"
  }
  const red = {
    backgroundColor: "#990011FF",
    color: "#FCF6F5FF"
  }
  const pink = {
    backgroundColor: "#e52165 ",
    color: "#0d1137"
  }
  const white = {
    backgroundColor: "white",
    color: "black"
  }
  const dark = {
    backgroundColor: "black",
    color: "#c7a318"
  }
  const [mode, setmode] = useState(dark);
  const [alert, setAlert] = useState(null);
  const showAlert = (title, message) => {
    setAlert({
      title: title,
      message: message
    })
    setTimeout(() => {
      setAlert("")
    }, 2000);
  }
  const handlethemes = () => {
    let greenbtn = document.getElementById("greenbtn")
    let whitebtn = document.getElementById("whitebtn")
    let peachbtn = document.getElementById("peachbtn")
    let redbtn = document.getElementById("redbtn")
    let pinkbtn = document.getElementById("pinkbtn")
    let darkbtn = document.getElementById("darkbtn")
    if (greenbtn.checked === true) {
      setmode(green)
      document.body.style.background = "#A7BEAE"
      showAlert("Applied", "MintGreen Theme")
    }
    else if (darkbtn.checked === true) {
      setmode(dark)
      document.body.style.background = "black"
      showAlert("Applied", "Dark Theme")
    }
    else if (peachbtn.checked === true) {
      setmode(peach)
      document.body.style.background = "#EEA47FFF"
      showAlert("Applied", "Peach Theme")
    }
    else if (redbtn.checked === true) {
      setmode(red)
      document.body.style.background = "#990011FF"
      showAlert("Applied", "CherryRed Theme")
    }
    else if (pinkbtn.checked === true) {
      setmode(pink)
      document.body.style.background = "#e52165"
      showAlert("Applied", "Pink Theme")
    }
    else if (whitebtn.checked === true) {
      setmode(white)
      document.body.style.background = "white"
      showAlert("Applied", "White Theme")
    }
  }
  return (
    <>
      <Router>
        <div style={mode}>
          <Navbar title="TextandTools" aboutText="About" mode={mode} handlethemes={handlethemes} showAlert={showAlert} />
          <Alert alert={alert} />
          <div>
            <Switch>
              <Route exact path="/">
                <TextForm showAlert={showAlert} heading="Enter your text to analyze" mode={mode} />
              </Route>
              <Route exact path="/about">
                <About mode={mode} />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
