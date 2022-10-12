import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { TaskProvider } from './context/'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TaskProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TaskProvider>
  </React.StrictMode>
)
