import React from 'react'

const TodoItem = ({todo}) => {
  return (
    <div>
        <p>{todo} <button>Delete Item</button></p> </div>
  )
}

export default TodoItem