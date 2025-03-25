import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ApiComponent = () => {

    // Keyword async here signifies that the function is an asynchronous function

    const [product, setProduct] = useState(null) // to handle the success state
    const [error, setError] = useState('') // To handle the error [rejected state]
    const [loading, setLoading] = useState(false)// to handle the pending state
     
    const callApi = async () => {
        // Using then and catch
        // When we retrieve an API
        // WE receive a promise
        // A promise is a data type to receive data from asynchronous operations
        // A promise has 3 states - Pending, Fulfilled, Rejected
        // Pending -> In process - Not retrieved the response yet
        // Fulfilled -> Success - Retrieved the response
        // Rejected -> Failed - Failed to retrieve the response

        // axios.get('https://dummyjson.com/products/1')
        // .then(response=>{
        //     // fulfilled state is handled here
        //     console.log(response.data)

        // })
        // .catch(err=>{
        //     // the error state is handled here
        //     console.log(err)

        // })

        // Using async await
        // -> Use to process a promise
// When using async await, we need to add async keyword on the function using it
        try {
// success part
        setError('') // to clear the error state
        setLoading(true) // to turn on the loading state
        const randomProduct = Math.ceil(Math.random()* 194)
        const response = await axios.get(`https://dummyjson.com/products/${randomProduct}`)
        setLoading(false) // to turn off the loading state
        console.log(response.data)
        // Update the product in the state
        setProduct(response.data)
        }
        catch (err){
            // error part
            setError(err.message)
            setLoading(false) // to turn off the loading state 
        }

    }

    useEffect(()=>{

        callApi() // retrieve the first recommended product to user
        
    },[]) //[] - empty array means that the effect will only run once
  return (
    <div>
        <h2>API Component</h2>
        {
            product == null || loading == true ? <p>No Product retrieved</p> :
            <div>
                <h3>{product.title}</h3>
                <img src={product.thumbnail} alt={product.title} />
                <p>{product.description}</p>
                <p>USD {product.price} - {product.category}</p>

            </div>
        }
        {  
            error && <p>{error}</p>
        }
      
        <button 
        disabled={loading}
        onClick={callApi}>
            {
                loading ? 'Loading...' : 'Get another product'
            }
            </button>
    </div>
  )
}

export default ApiComponent