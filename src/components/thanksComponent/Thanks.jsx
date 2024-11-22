import React from 'react'
import Card from '../../assets/Card'
import thanks from "../../assets/images/illustration-thank-you.svg"
import Button from '../Common/Button'

import "./Thanks.css"

function Thanks(props) {


    const backToPage1 = () => {
        props.pageState(1)
    }

  return (
    <Card>
        <div className='imgContainer'>
            <img src={thanks} alt="thanks" />
        </div>
        <div className='numberContainer'>
            <p>You select {props.number} out of 5</p>
        </div>
        <div className='thanksContainer'>
            <div>
                <h3>Thank you!</h3>
                <p>
                    We appreciate you taking the time to give a rating. 
                    If you ever need more support, don't hesitate to 
                    get in touch!
                </p>    
            </div>  
            <div className='buttonContainer'>
                <Button onClick={backToPage1} descript="Back"/>
            </div>
        </div>
    </Card>
  )
}

export default Thanks