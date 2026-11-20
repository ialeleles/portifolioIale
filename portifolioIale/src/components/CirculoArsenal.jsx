import Hexagono from "./Hexagono";

function CirculoArsenal() {
    return (
        <div className="circulo-container">
            <div className="circulo">
                <div className="anel-maior"></div>
                <div className="anel-menor"></div>

                <Hexagono posicao="topo" />
                <Hexagono posicao="topo-cima" />
                <Hexagono posicao="centro" />
                <Hexagono posicao="e-centro" />
                <Hexagono posicao="d-centro" />
                <Hexagono posicao="baixo" />
                <Hexagono posicao="m-baixo" />
                <Hexagono posicao="esq-cima" />
                <Hexagono posicao="esq-baixo" />
                <Hexagono posicao="dir-cima" />
                <Hexagono posicao="dir-baixo" />
            </div>
        </div>
    );
}

export default CirculoArsenal;