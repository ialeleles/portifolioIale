
function Contato() {
    return (
        <>
            <main className="contato-conteudo">

                <section className="contato-apresentacao">

                    <div className="contato-texto">
                        <h2>
                            VAMOS CONVERSAR
                        </h2>

                        <p>
                            Transformando ideias em projetos,
                            aprendendo e construindo algo novo
                            a cada linha de código.
                        </p>
                    </div>

                </section>

                <section className="contato-redes">
                    <a className="contato-card"
                        href="https://www.linkedin.com/in/iale-leles-4b5949357/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="devicon-linkedin-plain"></i>
                        <div>
                            <h3>LINKEDIN</h3>
                            <span>Vamos nos conectar</span>
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
                            <span>Veja meus projetos</span>
                        </div>
                        <span className="contato-seta">↗</span>
                    </a>

                    <a
                        className="contato-card"
                        href="mailto:ialeleles@proton.me"
                    >
                        <span className="contato-arroba">@</span>
                        <div>
                            <h3>E-MAIL</h3>
                            <span>Envie uma mensagem</span>
                        </div>
                        <span className="contato-seta">↗</span>
                    </a>

                </section>

            </main>
        </>
    )
}

export default Contato;
