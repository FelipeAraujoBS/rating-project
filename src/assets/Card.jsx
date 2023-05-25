import React from 'react'

import "./Assets.css"

function Card(props) {
  return (
    <div className="Card">
        {props.children}
    </div>
  )
}

export default Card