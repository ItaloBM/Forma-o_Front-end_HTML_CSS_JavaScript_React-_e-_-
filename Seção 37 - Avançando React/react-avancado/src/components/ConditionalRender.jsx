import React from 'react'

function ConditionalRender() {

  const x = true;

  const name = "Italo";

  return (

    <div>
      {/* 7 - Renderização condicional */}
      <h3>Isso será exibido?</h3>

      {/* IF */}
      {x && <p>Se x for true sim!</p>}

      {/* ELSE */}
      <h3>Render ternário</h3>

      {name === "Joao" ? (

        <div>
          <p>Olá Joao</p>
        </div>

      ) : ( 

        <div>
          <p>Nome não encontrado</p>
        </div>

      )}
    </div>
    
  );
};

export default ConditionalRender
