import { useState } from "react";


const Data = () => {
    let someData = 10;

    const [anotherNumber, setAnotherNumber] = useState(15);
    const [testeUseState, setTesteUseState] = useState("Testando useState");

    return (
        <div>
            <div>
                <p>Valor: {someData}</p>
                <button onClick={() => (someData=15)}>Mudar variável</button>
            </div>

            <div>
                <p>Valor: {anotherNumber}</p>
                <button onClick={() => (setAnotherNumber(20))}>Mudar variável</button>
            </div>

            <div>
                <p>Valor: {testeUseState}</p>
                <button onClick={() => (setTesteUseState("Teste concluido"))}>Mudar variável</button>
            </div>
        </div>      
    )
}

export default Data