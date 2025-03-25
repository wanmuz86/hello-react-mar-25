import React from 'react'

const TodoInput = () => {
    const [todo,setTodo] = useState('')
  return (
    <div>
        <input type="text" placeholder='Enter todo item name' 
        value={todo} onChange={(e)=>setTodo(e.target.value)}
        />
        <button onClick={()=>console.log(todo)}>Add</button>
    </div>
  )
}

export default TodoInput