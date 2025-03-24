import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'  // Import the global style in index.css
import App from './App.jsx'

// Replace whatever that is inside 
// the root div with the App component
// This is the entry point of the React app
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
