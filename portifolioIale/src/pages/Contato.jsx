import { FaWhatsapp } from "react-icons/fa";
import { useLang } from "../i18n/useLang";

const WHATSAPP = "https://wa.me/5531998876237";

function Contato() {
    const { t } = useLang();

    return (
        <div className="contato-conteudo">
            <section className="contato-apresentacao">
                <div className="contato-texto">
                    <h2>{t.contato.titulo}</h2>
                    <p>{t.contato.texto}</p>
                </div>
            </section>

            <section className="contato-redes">
                <a
                    className="contato-card"
                    href="https://www.linkedin.com/in/iale-leles-4b5949357/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="devicon-linkedin-plain"></i>
                    <div>
                        <h3>LINKEDIN</h3>
                        <span>{t.contato.linkedin}</span>
                    </div>
                    <span className="contato-seta">↗</span>
                </a>

                <a
                    className="contato-card"
                    href="https://github.com/ialeleles"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="devicon-github-original"></i>
                    <div>
                        <h3>GITHUB</h3>
                        <span>{t.contato.github}</span>
                    </div>
                    <span className="contato-seta">↗</span>
                </a>

                <a
                    className="contato-card"
                    href={WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaWhatsapp className="contato-icone" aria-hidden="true" />
                    <div>
                        <h3>WHATSAPP</h3>
                        <span>{t.contato.whatsapp}</span>
                    </div>
                    <span className="contato-seta">↗</span>
                </a>

                <a className="contato-card" href="mailto:ialeleles@proton.me">
                    <span className="contato-arroba">@</span>
                    <div>
                        <h3>E-MAIL</h3>
                        <span>{t.contato.email}</span>
                    </div>
                    <span className="contato-seta">↗</span>
                </a>
            </section>
        </div>
    )
}

export default Contato;
