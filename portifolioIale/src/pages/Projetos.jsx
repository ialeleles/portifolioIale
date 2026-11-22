import CardProjeto from "../components/CardProjeto";
import TimelineProjeto from "../components/TimelineProjeto";
import { projetos, projetosUefn } from "../data/projetos";
import { useLang } from "../i18n/useLang";

function Projetos() {
    const { t, tr } = useLang();

    return (
        <>
            <h1 className="titulo-pages">{t.projetos.titulo}</h1>

            <ol className="timeline">
                {projetos.map((p, i) => (
                    <TimelineProjeto
                        key={p.id}
                        ordem={i + 1}
                        nome={p.nome}
                        imagem={p.imagem}
                        descricao={tr(p.descricao)}
                        tags={p.tags}
                        link={p.link}
                        botao={p.link ? t.projetos.codigo : t.projetos.privado}
                    />
                ))}
            </ol>

            <h1 className="titulo-pages">{t.projetos.tituloUefn}</h1>

            <div className="projetos-grid-fortnite">
                {projetosUefn.map((p) => (
                    <CardProjeto
                        key={p.id}
                        nome={p.nome}
                        imagem={p.imagem}
                        descricao={tr(p.descricao)}
                        tags={p.tags}
                        link={p.link}
                        botao={t.projetos.verMais}
                    />
                ))}
            </div>
        </>
    )
}

export default Projetos;
