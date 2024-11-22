import Button from "../Common/Button"
import "./Form.css"

function Form(props) {
    

    const handleClick = (e) => {
        props.setNumber(e.target.innerText)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        props.pageState(2)
    }

  return (
   <form className='form' onSubmit={handleSubmit}>
     <div className='form-items'>
        <div className={`${props.number === "1" ? "itemContainer active" : "itemContainer"}`} onClick={handleClick}>1</div>
        <div className={`${props.number === "2" ? "itemContainer active" : "itemContainer"}`} onClick={handleClick}>2</div>
        <div className={`${props.number === "3" ? "itemContainer active" : "itemContainer"}`} onClick={handleClick}>3</div>
        <div className={`${props.number === "4" ? "itemContainer active" : "itemContainer"}`} onClick={handleClick}>4</div>
        <div className={`${props.number === "5" ? "itemContainer active" : "itemContainer"}`} onClick={handleClick}>5</div>
    </div>
    <div className='form-button'>
        {props.number === 0 ? <Button descript="Submit" type="submit" disabled="true" /> : <Button type='submit' descript="Submit"/>}
    </div>
   </form>
  )
}

export default Form