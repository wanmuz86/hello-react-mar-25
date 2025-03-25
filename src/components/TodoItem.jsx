import React from 'react'

const TodoItem = ({todo, handleDelete, handleComplete}) => {
 
  return (
    <div>
        <p style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>{todo.name}
        <button onClick={handleComplete(todo)}>
            {
            todo.completed ? 'Mark as Incomplete' : 'Mark as Complete'
            }
            </button>
        <button onClick={()=>handleDelete(todo)}>Delete Item</button></p> </div>
  )
}

export default TodoItem