import Cracha from "../components/Cracha";
import { useLang } from "../i18n/useLang";

function Home() {
    const { t } = useLang();

    return (
        <>
            <h1 className="titulo-pages">{t.home.titulo}</h1>

            <section className="principal">
                <Cracha />

                <div className="info-gerais">
                    <h2 className="titulo-pages">{t.home.sobre}</h2>

                    {t.home.paragrafos.map((p) => (
                        <p key={p}>{p}</p>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Home;
