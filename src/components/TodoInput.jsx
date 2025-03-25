import React,{useState} from 'react'

const TodoInput = ({handleAdd}) => {
    const [todo,setTodo] = useState('')
    const addItem = () => {
        if (todo.trim() !== ''){
            // Pass the data to the parent component
            handleAdd(todo)
            setTodo('') //Reset the input field
        }
        else {
            alert("Please enter a todo item")
        }
    }
  return (
    <div>
        <input type="text" placeholder='Enter todo item name' 
        value={todo} onChange={(e)=>setTodo(e.target.value)}
        />
        <button onClick={addItem}>Add</button>
    </div>
  )
}

export default TodoInput