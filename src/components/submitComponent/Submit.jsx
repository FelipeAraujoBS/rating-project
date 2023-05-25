import React from 'react'
import Card from "../../assets/Card"
import Form from './Form'
import iconStar from "../../assets/images/icon-star.svg"

import "./Submit.css"

function Submit(props) {
  return (
    <Card>
        <header className='submitHeader'>
          <div className='starContainer'><img className='star' src={iconStar} alt="star" /></div>
        </header>
        <div className='submitInfo'>
          <div className='infoContainer'>
            <h3>How did we do?</h3>
            <p>Please let us know how we did with you support request. All feedback is appreciated to help us improve our offering! </p>
          </div>
        </div>
        <div className='submitForm'>
           <Form number={props.number} setNumber={props.setNumber} pageState={props.pageState}/> 
        </div>
    </Card>
  )
}

export default Submit