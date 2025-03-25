import React from 'react'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'

const TodoList = () => {
  return (
    <div>
        <h2>To Do List</h2>
        <TodoInput/>
        {/* Later I will bring out the TodoItem */}
    </div>
  )
}

export default TodoList