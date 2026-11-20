import CardExperiencia from "../components/CardExperiencia";

function Experiencias() {
    return (
        <>
            <h1 className="titulo-pages">EXPERIÊNCIAS</h1>

            
                <div className="conteudo-xps">
                    <CardExperiencia
                        nome="Social Media"
                        texto="Atuei como social media para um influenciador de jogos online, contribuindo para a criação e produção de conteúdos autorais, com foco na comunicação e no engajamento com o público."
                    />

                    <CardExperiencia
                        nome="Criação de conteúdo autoral"
                        texto="Desenvolvi conteúdos autorais sobre jogos para as plataformas YouTube e TikTok, trabalhando na produção de vídeos voltados ao público gamer."
                    />

                    <CardExperiencia
                        nome="Fale com a tecnologia: inclusão digital para idosos do Aquarela Residencial Sênior"
                        texto="Participei de um projeto de extensão da PUC Minas, desenvolvido em equipe, com o objetivo de promover a inclusão digital de pessoas idosas por meio do contato com a tecnologia e do incentivo à autonomia no uso de ferramentas digitais."
                    />
                </div>
        </>
    )
}

export default Experiencias;