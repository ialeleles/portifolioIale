import { NavLink } from "react-router-dom";
import { useLang } from "../i18n/useLang";

function Header() {
    const { lang, setLang, t } = useLang();

    return (
        <header className="header">
            <h1 className="titulo">IALE LELES</h1>

            <nav className="nav">
                <NavLink to="/">{t.nav.perfil}</NavLink>
                <NavLink to="/projetos">{t.nav.projetos}</NavLink>
                <NavLink to="/arsenal">{t.nav.arsenal}</NavLink>
                <NavLink to="/experiencias">{t.nav.experiencias}</NavLink>
                <NavLink to="/contato">{t.nav.contato}</NavLink>

                <div className="idioma" role="group" aria-label={t.nav.idioma}>
                    <button
                        type="button"
                        className={lang === "pt" ? "ativo" : ""}
                        aria-pressed={lang === "pt"}
                        onClick={() => setLang("pt")}
                    >
                        PT
                    </button>
                    <span aria-hidden="true">|</span>
                    <button
                        type="button"
                        className={lang === "en" ? "ativo" : ""}
                        aria-pressed={lang === "en"}
                        onClick={() => setLang("en")}
                    >
                        EN
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Header;
