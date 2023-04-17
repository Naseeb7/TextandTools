import React from 'react'
import "./Alert.css"

export default function Alert(props) {
  return (
    props.alert && <div className='alertContainer heading'>
      <b style={{padding:"10px"}}>{props.alert.title}</b> <span>:</span><span style={{padding:"10px"}}>{props.alert.message}</span>
    </div>
  )
}
