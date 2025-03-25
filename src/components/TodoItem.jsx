import React from 'react'

const TodoItem = ({todo, handleDelete}) => {
  return (
    <div>
        <p>{todo} <button onClick={()=>handleDelete(todo)}>Delete Item</button></p> </div>
  )
}

export default TodoItem