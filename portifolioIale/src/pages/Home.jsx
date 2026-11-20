import Cracha from "../components/Cracha";

function Home() {
    return (
        <>
            <h1 className="titulo-pages">ARQUIVO PESSOAL</h1>

            <main className="principal">
                <Cracha />

                <div className="info-gerais">
                    <h1 className="titulo-pages">SOBRE MIM</h1>

                        <p>
                            Sou estudante de Engenharia de Software na PUC Minas, com experiência
                            prévia como criador de conteúdo e social media. Essa trajetória
                            contribuiu para desenvolver minha criatividade, comunicação e
                            compreensão do público.
                        </p>
                        
                        <p>
                            Atualmente, tenho interesse em desenvolvimento Full Stack e Mobile,
                            buscando unir tecnologia e experiência do usuário na criação de
                            aplicações web e mobile acessíveis, intuitivas e com impacto positivo
                            na vida dos usuários.
                        </p>
                </div>
            </main>
        </>
    )
}

export default Home;
