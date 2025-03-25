import React, { useState } from 'react'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'

const TodoList = () => {
    // Create a state variable called todos, which will store my todo list
    const [todos, setTodos] = useState([])

    const addItem = (todo) => {
        alert(`User entered ${todo}`)

    }
  return (
    <div>
        <h2>To Do List</h2>
        <TodoInput handleAdd={addItem}/>
        {/* Later I will bring out the TodoItem */}
    </div>
  )
}

export default TodoList