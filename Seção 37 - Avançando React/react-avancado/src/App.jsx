import './App.css';

// 2 - Imagem em assets
// import Site from './assets/Site.png'

// 3 - Importação do hook useState
import Data from './components/Data';

// 4 - Renderização de lista
import ListRender from './components/ListRender';

// 7 - Renderização condicional
import ConditionalRender from './components/ConditionalRender';

// 8 - Props
import ShowUserName from './components/ShowUserName';

// 9 - Desestruturando props
import CarDetails from './components/CarDetails';

// 11 - Renderização de listas com componente
const cars = [
  {id: 1, brand: "Ferrari", color: "Azul", km: 0},
  {id: 2, brand: "Kia", color: "Branco", km: 200000},
  {id: 3, brand: "Renault", color: "Azul", km: 32000}
];

// 12 - Fragments
import Fragment from './components/Fragment';

// 13 - Children
import  Container from './components/Container';

// 14 - Funcção em prop
import ExecuteFunction from './components/ExecuteFunction';

// 15 - State lift
import { useState } from 'react'
import Message from './components/Message';
import ChangeMessage from './components/ChangeMessage';
  

function App() {

  // 14 - Execute Function Funcção em prop
  function ShowMessage() {
    console.log("Evento do componente pai");
  };

   // 15 - State lift
   const [message, setMessage] = useState("");

   // eslint-disable-next-line no-unused-vars
   const handleMessage = (msg) => {
     setMessage(msg);
   };
  
  return (
    <div className="App" style ={{ paddingBottom: "500px" }}>
      <h1>React Avancado</h1>
      {/* 1 - Imagem em public */}
      {/* <img src="/print.png" alt="Print Tela" /> */}
      {/* 2 - Imagem em assets */}
      {/* <img src={Site} alt="Site" /> */}
      {/* 3 - Importação do hook useState */}
      <Data />

      <ListRender />

      {/* 7 - Renderização condicional */}
      <ConditionalRender />

      {/* 8 - Props */}
      <ShowUserName name="Italo"/>

      {/* 9 - Desestruturando props */}
      <CarDetails brand="VW" km={1000} color="Azul"/>

      {/* 10 - Reaproveitando componentes */}
      <CarDetails brand="Fiat" km={2000} color="Vermelho"/>
      <CarDetails brand="Ford" km={3000} color="Preto"/>

      {/* 11 - Renderização de listas com componente */}
      {cars.map((car) => (
          <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km}/>
        ))
      }

      {/* 12 - Fragments */}
      <Fragment />

      {/* 13 - Children */}
      <Container>
        <p>Alguma coisa</p>
      </Container>

      <Container>
        <div>
          <h2>Teste</h2>
          <p>Meu componente</p>
        </div>
      </Container>

      {/* 14 - Execute Function Funcção em prop */}	
      <ExecuteFunction myFunction={ShowMessage}/>

      {/* 15 - State lift */}
      <Message msg = {message}/>
      <ChangeMessage handleMessage={handleMessage}/>
      
    </div>
  )
}

export default App
