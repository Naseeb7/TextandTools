import React from 'react'
import "./Alert.css"

export default function Alert(props) {
  return (
    props.alert && <div className='alertContainer heading'>
      <strong>{props.alert.title} </strong>  {props.alert.message}
    </div>
  )
}
