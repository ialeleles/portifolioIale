import CardExperiencia from "../components/CardExperiencia";
import { experiencias } from "../data/experiencias";
import { useLang } from "../i18n/useLang";

function Experiencias() {
    const { t, tr } = useLang();

    // "instituicao" pode ser texto simples ou { pt, en }
    const texto = (v) => (v && typeof v === "object" ? tr(v) : v);

    return (
        <>
            <h1 className="titulo-pages">{t.experiencias.titulo}</h1>

            <div className="conteudo-xps">
                {experiencias.map((x) => (
                    <CardExperiencia
                        key={x.id}
                        cargo={tr(x.cargo)}
                        instituicao={texto(x.instituicao)}
                        periodo={texto(x.periodo)}
                        texto={tr(x.descricao)}
                    />
                ))}
            </div>
        </>
    )
}

export default Experiencias;
