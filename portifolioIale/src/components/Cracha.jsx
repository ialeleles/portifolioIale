import { useLang } from "../i18n/useLang";

function Cracha() {
    const { t } = useLang();

    return (
        <div className="cracha">
            <div className="cracha-header">
                <h1 className="cracha-titulo">IDENTIFICATION DIVISION</h1>
            </div>

            <div className="cracha-conteudo">
                <img className="cracha-foto" src="/ialeprofile.png" alt={t.cracha.fotoAlt} />

                <div className="cracha-informacoes">
                    <p className="cracha-titulo-info">{t.cracha.nome}</p>
                    <p className="cracha-info">Iale Leles de Almeida</p>

                    <p className="cracha-titulo-info">{t.cracha.formacao}</p>
                    <p className="cracha-info">{t.cracha.valorFormacao}</p>

                    <p className="cracha-titulo-info">{t.cracha.base}</p>
                    <p className="cracha-info">{t.cracha.valorBase}</p>

                    <p className="cracha-titulo-info">{t.cracha.status}</p>
                    <p className="cracha-info">{t.cracha.valorStatus}</p>
                </div>
            </div>

            <div className="cracha-footer"></div>
        </div>
    )
}

export default Cracha;
