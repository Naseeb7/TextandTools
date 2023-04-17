import React from 'react'
import "./Confirmbox.css"

export default function Confirmbox(props) {
  return (
    <div>
      <div id="confirmation">
        <span className="confirmation confirmboxtext" id="confirmboxtext">{props.confirmboxtext}</span>
        <span className="comments confirmboxtext" id="confirmboxcomment">{props.comment}</span>
        <div id="yesnobtn">
            <button className="btn" id="yesbtn">Yes</button>
            <button className="btn" id="nobtn">No</button>
        </div>
      </div>
    </div>
  )
}
