import React, { useState } from 'react'
import Confirmbox from './Confirmbox';
import "./TextForm.css"

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleupClick = () => {
    if (text !== "") {
      setText(text.toUpperCase())
    }
    else {
      props.showAlert("Denied","Enter text first")
    }
  }
  const handlelowClick = () => {
    if (text !== "") {
      setText(text.toLowerCase())
    }
    else {
      props.showAlert("Denied","Enter text first")
    }
  }
  const handleonChange = (e) => {
    setText(e.target.value)
  }
  const handleReplace = () => {
    if (text !== "") {
      let replacethis = document.getElementById("replacethis").value
      let replacewith = document.getElementById("replacewith").value
      if (replacethis !== "" && replacewith !== "") {
        let newword = new RegExp(replacethis, "gi"); // search for all instances
        let newText = text.replace(newword, replacewith);
        // document.getElementById("preview").innerHTML=newText
        setText(newText)
      }
      props.showAlert("Success", "Replaced word successfully!")
    }
    else {
      props.showAlert("Enter text first!")
    }
  }
  const handleReset = () => {
    if (text !== "") {
      setText("")
      document.getElementById("preview").innerHTML = ""
      document.getElementsByClassName("extraction")[0].innerHTML = ""
    }
  }
  const handleTrim = () => {
    if (text !== "") {
      let cbox = document.getElementById("cbox")
      cbox.classList.toggle("cbox")
      let trimvalue = document.getElementById("trimvalue").value
      let newText = text.split(" ", trimvalue).join(" ")
      document.getElementById("preview").innerHTML = newText
      let yesbtn = document.getElementById("yesbtn")
      let nobtn = document.getElementById("nobtn")
      yesbtn.onclick = () => {
        setText(newText)
        cbox.classList.toggle("cbox")
        props.showAlert("Success", "Text trimmed successfully!")
      }
      nobtn.onclick = () => {
        document.getElementById("preview").innerHTML = text
        // setText(text)
        cbox.classList.toggle("cbox")
        props.showAlert("Denied", "Denied by user!")
      }
    }
    else {
      props.showAlert("Enter text first!")
    }
  }
  const handleNumberex = () => {
    const matches = text.match(/\d+/g);
    if (text !== "") {
      if (matches == null) {
        props.showAlert("Empty!", "No numbers found in text")
      }
      else {
        document.getElementById("numberextracted").innerHTML = `<h4>Numbers extracted : </h4>${matches.join(" , ")}`
        props.showAlert("Numbers Extracted", "Plese scroll down")
      }
    }
    else {
      props.showAlert("Enter text first!")
    }
  }
  const handleEmailex = () => {
    if (text !== "") {
      let matches = text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
      if (matches == null) {
        props.showAlert("Empty!", "No E-mail ids found in text")
      }
      else {
        document.getElementById("emailextracted").innerHTML = `<h4>E-mail ids extracted : </h4>${matches.join(" , ")}`
        props.showAlert("E-mail Ids extracted", "Plese scroll down")
      }
    }
    else {
      props.showAlert("Enter text first!")
    }
  }
  const handleCopy = () => {
    navigator.clipboard.writeText(text)
    if (text !== "") {
      props.showAlert("Success", "Text copied to clipboard!!")
    }
    else {
      props.showAlert("Empty", "Nothing to copy")
    }
  }
  const handleClearsearch=()=>{
    document.getElementById("occurances").innerHTML = ""
    document.getElementById("preview").innerHTML = document.getElementById("textarea").value
  }
  return (
    <>
      <div className="FormContainer">
        <div className='textContainer'>
          <h1 className='heading' style={props.mode}>{props.heading}</h1>
          <textarea id="textarea" value={text} onChange={handleonChange} rows="10" placeholder='Enter text here'></textarea>
          <div className='fonts textsummary' style={props.mode}>{text.split(' ').filter((x) => x.trim().length > 0).length} words with {text.length} characters and about {Math.round(0.008 * text.split('').length)} minutes to read the whole text.</div>

        </div>
        <div className="btncontainer">
          <button className="btn" id='upbtn' onClick={handleupClick}>Convert to Uppercase</button>
          <button className="btn" id='lowbtn' onClick={handlelowClick}>Convert to Lowercase</button>
          <button className="btn" id="resetbtn" onClick={handleReset}>Reset</button>
          <button className="btn" id="numberextraction" onClick={handleNumberex}>Extract numbers</button>
          <button className="btn" id="emailextraction" onClick={handleEmailex}>Extract Emails</button>
          <button className="btn" id="copybtn" onClick={handleCopy}>Copy</button>
        </div>
        <div className="replaceContainer">
          <label htmlFor="replacethis" className="replace fonts" style={props.mode}>Replace</label>
          <input type="text" htmlFor="replacethis" className="replace" style={props.mode} id="replacethis" placeholder='this' />
          <label htmlFor="replacewith" className="replace fonts" style={props.mode}>with</label>
          <input type="text" htmlFor="replacewith" className="replace" style={props.mode} id="replacewith" placeholder='that' />
          <button className="btn" id="replacebtn" onClick={handleReplace}>Replace</button>
        </div>
        <div className="trimContainer">
          <div className="trimvisible">
            <label htmlFor="trim" className="trim fonts" style={props.mode}>Trim to </label>
            <input type="text" id="trimvalue" className='border' placeholder='100' style={props.mode} />
            <label htmlFor="trim" className="trim fonts" style={props.mode}>words</label>
            <button htmlFor="trim" className="btn" id="trimbtn" onClick={handleTrim}>Trim</button>
          </div>
          <div id="cbox" className='cboxhidden'>
            <Confirmbox confirmboxtext={"Are you sure you want to trim?"} comment={"*Please review first"} />
          </div>
        </div>
      </div>
      <div className="previewContainer" >
          <button className='btn clearbtn' onClick={handleClearsearch}>Clear Search</button>
        <h2 className='heading' style={props.mode}>Preview</h2>
        <span id='occurances' className='occurances fonts' style={props.mode}></span>
        <p id='preview'>{text.length > 0 ? text : "Enter text to preview it here."}</p>
        <div className="extraction heading">
          <p id="numberextracted"></p>
          <p id="emailextracted"></p>
        </div>
      </div>
    </>
  )
}
//Tasks to add :
// Email-extractor,number-extractor,text-clear,trim to number of words by user,replace words,give searchbar a function to search within text
// Done