import CardProjeto from "../components/CardProjeto";

function Projetos() {
    return (
        <>
            <h1 className="titulo-pages">PROJETOS</h1>

            <div className="projetos-grid">
                <CardProjeto nome="Skate Hub" imagem="/skateHub.png" descricao="Projeto Skate Hub" tags={["JavaScript", "html", "CSS"]} botao="Ir para o código" link="https://github.com/ialeleles/Skate-Hub"/>
                <CardProjeto nome="Meepleshelf" imagem="/Print_01_meepleshelf.png" descricao="Projeto MeepleShelf" tags={["JavaScript", "html", "CSS", "JSON Server"]} botao="Projeto privado"/>
                <CardProjeto nome="Antares" imagem="/antares.png" descricao="Jogo Antares" tags={["Python", "Pygame"]} botao="Projeto privado"/>
                <CardProjeto nome="Breaking Bet" imagem="/breaking_bet.png" descricao="Projeto Breaking Bet" tags={["TypeScript", "React"]} botao="Projeto privado"/>
            </div>

            <h1 className="titulo-pages">PROJETOS UEFN</h1>

            <div className="projetos-grid-fortnite">
                <CardProjeto nome="🏁 AURA RACE PARKOUR (99+) 🥇" imagem="/landscape_comp (2).jpeg" descricao="Projeto UEFN aura race parkour" tags={["Verse", "UEFN"]} botao="Ver mais" link="https://fortnite.gg/island/1798-8532-2452"/>
                <CardProjeto nome="1v1v1 BOX FIGHT OG 📦" imagem="/landscape_comp (3).jpeg" descricao="Projeto UEFN 1v1 box fight og" tags={["Verse", "UEFN"]} botao="Ver mais" link="https://fortnite.gg/island/2092-3274-5229"/>
                <CardProjeto nome="🔫 GUN GAME FINAL BULLET 🔥" imagem="/landscape_comp (4).jpeg" descricao="Projeto UEFN gun game final bullet" tags={["Verse", "UEFN"]} botao="Ver mais" link="https://fortnite.gg/island/3170-5253-6428"/>
                <CardProjeto nome="⚡ BOX FIGHT LAST RESPAWN 1v1v1 🎯" imagem="/landscape_comp (5).jpeg" descricao="Projeto UEFN box fight last respawn 1v1v1" tags={["Verse", "UEFN"]} botao="Ver mais" link="https://fortnite.gg/island/6641-6689-0151"/>
            </div>
        </>
    )
}

export default Projetos;