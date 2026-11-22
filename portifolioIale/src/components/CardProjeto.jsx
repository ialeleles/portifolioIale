import Tag from "./Tag";

function CardProjeto({ nome, imagem, descricao, tags, botao, link }) {
    return (
        <div className="card">
            <div className="card-header">
                <img className="card-imagem" src={imagem} alt={nome} />
            </div>

            <div className="card-conteudo">
                <h2 className="card-titulo">{nome}</h2>

                {descricao && <p className="card-descricao">{descricao}</p>}

                <div className="card-tags">
                    {tags && tags.map((tag) => (
                        <Tag key={tag} nome={tag} />
                    ))}
                </div>
            </div>

            <div className="card-footer">
                {link ? (
                    <a className="card-button" href={link} target="_blank" rel="noopener noreferrer">{botao}</a>
                ) : (
                    <span className="card-button desativado">{botao}</span>
                )}
            </div>
        </div>
    )
}

export default CardProjeto;
