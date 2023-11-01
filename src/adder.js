import { useState } from 'react'

function Adder() {
  const [Count, setCount] = useState(0)
  function increase() {
    setCount(Count + 1)
  }
  function decrease() {
    setCount(Count - 1)
  }

  var Time = new Date().toLocaleTimeString()
  const [set, setTime] = useState(Time)

  function getTime() {
    const newTime = new Date().toLocaleTimeString()
    setTime(newTime)
  }
  // setInterval(getTime, 1000)
  return (
    <div>
      <h1>{Count}</h1>
      <button onClick={increase}>up</button>
      <button onClick={decrease}>down</button>
      <h1>{set}</h1>
      <button onClick={getTime}>GetTime</button>
    </div>
  )
}

export default Adder
