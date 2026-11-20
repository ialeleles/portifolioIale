function CardExperiencia(props) {
    return (
        <div className="card-xp">
            <div className="card-xp-header">
                <h1 className="card-xp-titulo">{props.nome}</h1>
            </div>

            <main className="conteudo-xp">
                <p className="texto-xp">{props.texto}</p>
            </main>
        </div>
    )
}

export default CardExperiencia;