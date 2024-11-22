import React from 'react'

import "./Button.css"

function Button(props) {
  return (
    <button onClick={props.onClick} type={props.type} disabled={props.disabled} className={props.className}>
        {props.descript}
    </button>
  )
}

export default Button