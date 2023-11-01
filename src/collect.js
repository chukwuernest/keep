import React from 'react'
import Arr from './array'

function Collect(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.age}</p>
      <img src={props.image} alt='img' />
    </div>
  )
}

export default Collect
