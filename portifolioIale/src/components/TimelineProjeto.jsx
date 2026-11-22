import Tag from "./Tag";

function TimelineProjeto({ ordem, nome, imagem, descricao, tags, botao, link }) {
    return (
        <li className="timeline-item">
            <span className="timeline-marcador" aria-hidden="true"></span>

            <article className="timeline-card">
                <img className="timeline-imagem" src={imagem} alt={nome} />

                <div className="timeline-corpo">
                    <span className="timeline-ordem">{String(ordem).padStart(2, "0")}</span>
                    <h2 className="timeline-titulo">{nome}</h2>
                    <p className="timeline-descricao">{descricao}</p>

                    <div className="card-tags timeline-tags">
                        {tags.map((tag) => (
                            <Tag key={tag} nome={tag} />
                        ))}
                    </div>

                    {link ? (
                        <a className="card-button" href={link} target="_blank" rel="noopener noreferrer">{botao}</a>
                    ) : (
                        <span className="card-button desativado">{botao}</span>
                    )}
                </div>
            </article>
        </li>
    )
}

export default TimelineProjeto;
