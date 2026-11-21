import Hexagono from "./Hexagono";

function CirculoArsenal() {

    return (
        <div className="circulo-container">
            <div className="circulo">
                <div className="anel-maior"></div>
                <div className="anel-menor"></div>

                <Hexagono posicao="topo"><i className="devicon-javascript-plain"></i></Hexagono>
                <Hexagono posicao="centro"><i className="devicon-python-plain"></i></Hexagono>
                <Hexagono posicao="baixo"><i className="devicon-react-original"></i></Hexagono>
                <Hexagono posicao="esq-cima"><i className="devicon-java-plain"></i></Hexagono>
                <Hexagono posicao="esq-baixo"><i className="devicon-css3-plain"></i></Hexagono>
                <Hexagono posicao="dir-cima"><i className="devicon-html5-plain"></i></Hexagono>
                <Hexagono posicao="dir-baixo"><i className="devicon-git-plain"></i></Hexagono>
            </div>
        </div>
    );
}

export default CirculoArsenal;