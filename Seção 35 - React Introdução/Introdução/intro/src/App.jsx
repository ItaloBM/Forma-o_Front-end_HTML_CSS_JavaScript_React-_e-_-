import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// 2 - Importando um componente
import FirstComponent from './components/FirstComponent'
// 4 - Template expressions
import TemplateExpression from './components/TemplateExpression'
import MyComponent from './components/MyComponent'
import Events from './components/Events'

function App() {

  return (
    // 3 - Comentários    
    <div className="App">
      {/* 4 - Comentários JSX */}
      <h2>Fundamentos do React</h2>
      <FirstComponent />
      <TemplateExpression />
      <MyComponent />
      <Events />
    </div>
  )
}

export default App
