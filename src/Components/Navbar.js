import React from 'react'
import PropTypes from 'prop-types'
import "./Navbar.css"
import Sliderbutton from "./Sliderbutton.js"
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  const handleSearch = (e) => {
    let preview = document.getElementById("textarea").value
    let searchvalue = document.getElementById("searchbar").value.trim()
    if (searchvalue !== "") {
      let newword = new RegExp(searchvalue, "g"); // search for all instances
      let newText = preview.replace(newword, `<mark>${searchvalue}</mark>`);
      document.getElementById("preview").innerHTML = newText
      const findAll = (arr, query) => {
        let count = 0;
        count = arr.filter(el => {
          return el.indexOf(query) !== -1;
        }).length;
        return count;
      };
      if (preview !== "") {
        if (findAll(preview.split(" "), searchvalue) !== 0) {
          document.getElementById("occurances").innerHTML = `Number of occurances : ${findAll(preview.split(" "), searchvalue)}`
          props.showAlert("Done","See preview for results")
        }
        else {
          document.getElementById("occurances").innerHTML = `${searchvalue} not in text!`
          setTimeout(()=>{
            document.getElementById("occurances").innerHTML = ""
          },5000)
        }
      }
      else {
        props.showAlert("Denied","Enter text first")
      }
    }
  }
  return (
    <>
      <div className="navbarContainer">
        <label className='title' style={props.mode}>{props.title}</label>
        <div className="alllinks">
          <Link to="/" className="links" id="homelink" style={props.mode}>Home</Link>
          <Link to="/about" className="links" id="aboutlink" style={props.mode}>{props.aboutText}</Link>
        </div>
        <div className="searchContainer" id='searchContainer'>
          <input type="text" className="searchbar border" name='search' id='searchbar' />
          <button className="btn" id="searchbtn" name='search' onClick={handleSearch}>Search</button>
        </div>
      </div>
        <div className="themetext heading">Make it fun with themes:</div>
      <div className="themebtns">
        <span className="sliderBtn"><Sliderbutton type={"radio"} heading={"MintGreen"} style={props.mode} name={"themebtn"} id={"greenbtn"} handlethemes={props.handlethemes} /></span>
        <span className="sliderBtn"><Sliderbutton type={"radio"} heading={"Peach"} style={props.mode} name={"themebtn"} id={"peachbtn"} handlethemes={props.handlethemes} /></span>
        <span className="sliderBtn"><Sliderbutton type={"radio"} heading={"CherryRed"} style={props.mode} name={"themebtn"} id={"redbtn"} handlethemes={props.handlethemes} /></span>
        <span className="sliderBtn"><Sliderbutton type={"radio"} heading={"Pink"} style={props.mode} name={"themebtn"} id={"pinkbtn"} handlethemes={props.handlethemes} /></span>
        <span className="sliderBtn"><Sliderbutton type={"radio"} heading={"White"} style={props.mode} name={"themebtn"} id={"whitebtn"} handlethemes={props.handlethemes} /></span>
        <span className="sliderBtn"><Sliderbutton type={"radio"} heading={"Dark"} style={props.mode} name={"themebtn"} id={"darkbtn"} handlethemes={props.handlethemes} /></span>
      </div>
    </>
  )
}
Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string
}
Navbar.defaultProps = {
  title: "Enter title",
  aboutText: "About here"
};
