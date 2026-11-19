import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <header>
                <h1>Iale Leles</h1>

                <nav>
                    <Link to="/">Sobre mim</Link>
                    <Link to="/projetos">Projetos</Link>
                    <Link to="/experiencias">Experiências</Link>
                    <Link to="/contato">Contato</Link>
                </nav>
            </header>
        </>
    )
}

export default Header;