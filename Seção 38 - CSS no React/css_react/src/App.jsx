import './App.css'

// 2 - CSS de Componente
import MyComponent from './components/MyComponent'
import Title from './components/Title'

function App() {

  // 4 - CSS
  const n = 15

  // 5 - Classes dinâmicas
  const redTitle = true
  
  return (
    <div className="App">

      {/* 1 - CSS GLOBAL */}
      <h1>CSS no React</h1>

      {/* 2 - CSS de Componente */}
      <MyComponent />

      {/* 3 - Inline Style */}
      <p style={{ color: "blue", padding: "25px", borderTop: "1px dotted blue"  }}>Este elemento tem estilos inline</p>

      {/* 4 - Inline Style dinâmico */}
      <h2 style={n > 10 ? {color: "purple"} : {color: "magenta"}}>
        Css Dinâmico
      </h2>

      <h2 style={n > 20 ? {color: "purple"} : {color: "magenta"}}>
        Css Dinâmico 2
      </h2>

      {/* 5 - Classes dinâmicas */}
      <h2 className={redTitle ? "red-title" : "title"}>
          Este título vai ter uma classe
      </h2>

      {/* 6 - CSS Modules */}
      <Title />

    </div>

  )
}

export default App
