const Events = () => {

    const handleClick = (e) => {
        console.log(e)
        alert('Clicou')
    }

    // 8 - Função de renderizacão.
    const renderSomething = (x) => {
        if (x) {
            return <h1>Renderizando isso!</h1>
        } else {
            return <h1>Renderizando outra coisa!</h1>
        }
    }

    return 10 > 2 && <p>Carregando...</p>

    return (
        <div>
            <div>
                <button onClick={() => alert('Clicou')}>
                    Clique aqui
                </button>
            </div>
            {/* 7 - Evento com função. */}
            <div>
                <button onClick={handleClick}> Clique aqui - com função</button>                
            </div>

            {/* 8 - Função de renderizacão. */}
            {renderSomething(true)}
            {renderSomething(false)}
        </div>  

    )
}

export default Events