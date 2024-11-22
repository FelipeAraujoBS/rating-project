import Submit from "./components/submitComponent/Submit"
import Thanks from "./components/thanksComponent/Thanks"
import { useState } from 'react'

function App() {
  const [pageState, setPageState] = useState(1)
  const [number, setNumber] = useState(0)

  console.log(number)
  
  return (
    <>
     {pageState === 1 ? <Submit number={number} setNumber={setNumber} pageState={setPageState}/> : <Thanks pageState={setPageState} number={number}/>}
    </>
  )
}

export default App
