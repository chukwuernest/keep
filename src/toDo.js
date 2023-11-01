import React, { useState } from 'react'
import AddToDo from './addToDo'

function ToDo() {
  const [inputText, setInputText] = useState('')
  const [items, setItems] = useState([])

  function handleChange(event) {
    const newValue = event.target.value
    setInputText(newValue)
  }

  function addItem() {
    setItems((previtems) => {
      return [...previtems, inputText]
    })
  }
  function deleteItem(id) {
    setItems((previtems) => {
      return previtems.filter((items, index) => {
        return index !== id
      })
    })
  }

  return (
    <div>
      <h1>To-Do-list</h1>
      <form>
        <input onChange={handleChange} type='text' value={inputText} />
      </form>
      <button onClick={addItem}>To-Add-To-List</button>
      <ul>
        {items.map((list, index) => {
          return (
            <AddToDo
              key={index}
              id={index}
              text={list}
              onChecked={deleteItem}
            />
          )
        })}
      </ul>
    </div>
  )
}

export default ToDo
