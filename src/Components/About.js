import React from 'react'
import "./About.css"

export default function About(props) {
  return (
    <div className='aboutContainer' >
      <div className="title" style={props.mode}>About TextandTools</div>
      <p className="abouttext fonts" style={props.mode}>TextandTools is an utility app for all your text needs. Manipulate your text however you like with the tools.
       A variety of tools has been provided for your convenience. And to make the long hour sessions easy feel free to use the themes 
      to your liking.</p>     <strong>Happy formatting!</strong>
    </div>
  )
}
