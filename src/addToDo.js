import React from 'react'

function AddToDo(props) {
  function handleChange() {}
  return (
    <div
      onClick={() => {
        props.onChecked(props.id)
      }}
    >
      <li>{props.text}</li>
    </div>
  )
}

export default AddToDo
