import React from 'react'
import Routess from './routes/Routess'
import { ToastContainer } from 'react-toastify'

import "./App.css"

function App() {
  return (
    <div className='app'>
      <Routess />
      <ToastContainer />
    </div>
  )
}

export default App