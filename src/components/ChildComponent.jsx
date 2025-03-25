import React, {useState} from 'react'

// Object destructuring on the props
const ChildComponent = ({handleClick}) => {
    
    const [data,setData] = useState('')
    const passDataParent = () => {  
        // Call the props->
        // Pass the data
        // Then the parent function will be called
        
        handleClick(data)
    
    }
  return (
    <div>
        <input type="text" placeholder='Enter data to passed to parent'
        value={data} onChange={(e)=>setData(e.target.value)}
        />
        <button onClick={passDataParent}>Pass data to parent</button>
    </div>
  )
}

export default ChildComponent