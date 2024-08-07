// 4 - Template expressions
const TemplateExpression = () => {
    const name = 'IBM'

    const data = {
        age: 30,
        job: 'Programador'
    }

    return (
        <div>
            <p>A soma é {2+2}</p>
            <h3>Bem vindo  {name}</h3>
            <p>Sua idade e {data.age} anos e voce trabalha como {data.job}.</p>
        </div>
    )
}

export default TemplateExpression