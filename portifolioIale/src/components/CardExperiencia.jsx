function CardExperiencia({ cargo, instituicao, periodo, texto }) {
    return (
        <div className="card-xp">
            <div className="card-xp-header">
                <h2 className="card-xp-titulo">{cargo}</h2>

                {(instituicao || periodo) && (
                    <p className="card-xp-meta">
                        {instituicao && <span>{instituicao}</span>}
                        {instituicao && periodo && <span aria-hidden="true"> · </span>}
                        {periodo && <span className="card-xp-periodo">{periodo}</span>}
                    </p>
                )}
            </div>

            <div className="conteudo-xp">
                <p className="texto-xp">{texto}</p>
            </div>
        </div>
    )
}

export default CardExperiencia;
