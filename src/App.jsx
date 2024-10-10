import {useEffect, useRef, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [mohamed,setMohamed] = useState(0)
  const [x, setX] = useState(0)
  const r = useRef(null)
  const f = useRef(null)

  const plushandler = () => {
    setMohamed(mohamed + 1)
  }
  const minsehandler = () => {
    setMohamed(mohamed - 1)
  }
  useEffect(() => {
    r.current.click();
    f.current.focus()
  },[x])
  return (
    <>
       <div className="App">
        <button  ref={r} onClick={plushandler}>+</button>
        <button onClick={minsehandler}>-</button>
        <button onClick={() => setX(x + 1)}>+</button>
        <button onClick={() => setX(x-1)}>-</button>
        {mohamed}
        {x}
        <br/>
        <br/>
        <input type="text" ref={f} />
       </div>
    </>
  )
}

export default App
