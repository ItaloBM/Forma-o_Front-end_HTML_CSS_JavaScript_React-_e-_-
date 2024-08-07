import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyForm from './components/MyForm.jsx'

function App() {
  
  return (
      <div className="App">
        <h1>Form em React</h1>      
        <MyForm userName="italo" userEmail="italobm2011@gmail.com" />  
      </div>
      
    
  )
}

export default App