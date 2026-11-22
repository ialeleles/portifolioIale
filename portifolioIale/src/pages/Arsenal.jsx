import CirculoArsenal from "../components/CirculoArsenal";
import { useLang } from "../i18n/useLang";

function Arsenal() {
    const { t } = useLang();

    return (
        <>
            <h1 className="titulo-pages">{t.arsenal.titulo}</h1>

            <CirculoArsenal />
        </>
    )
}

export default Arsenal;
