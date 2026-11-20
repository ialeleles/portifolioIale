import Tag from "./Tag";

function CardProjeto(props) {
    return (
        <>
            <div className="card">
                <div className="card-header">
                    <img className="card-imagem" src={props.imagem} alt={props.descricao}></img>
                </div>

                <div className="card-conteudo">
                    <h1 className="card-titulo">{props.nome}</h1>

                    <div className="card-tags">
                        {props.tags && props.tags.map((tag) => (
                            <Tag key={tag} nome={tag} />
                        ))}
                    </div>
                </div>

                <div className="card-footer">
                    <a className="card-button" href={props.link} target="_blank" rel="noopener noreferrer">{props.botao}</a>
                </div>
            </div>
        </>
    )
}

export default CardProjeto;