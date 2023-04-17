import React from 'react'
import "./sliderbutton.css"

export default function Sliderbutton(props) {
  return (
    <div>
      <div className="sliderContainer">
        <label htmlFor={props.id} className="sliderlabel">
        <input type={props.type} name={props.name} id={props.id} onClick={props.handlethemes} defaultChecked/>
        <div className="slider round" id="slider" htmlFor={props.id}></div>
        </label>
        <label className="heading" htmlFor={props.id} style={props.style}>{props.heading}</label>
      </div>
    </div>
  )
}
//Props
//id,name,type,heading,style