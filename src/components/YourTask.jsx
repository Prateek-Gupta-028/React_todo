import React, { useState } from 'react'
import './todo.css'

function YourTask(props) {
  const [stylee, setStyle] = useState("sub3");
  const changeStyle = () => {
    setStyle("con2")
  }
  return (
    <div className={stylee}>
      <li onDoubleClick={changeStyle}>{props.item}</li>
      <button onClick={e => {
        props.deleteItem(props.index)
      }}>Delete</button>

    </div>
  )
}

export default YourTask