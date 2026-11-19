import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <header className="header">
                <h1 className="titulo">IALE LELES</h1>

                <nav className="nav">
                    <Link to="/">PERFIL</Link>
                    <Link to="/projetos">PROJETOS</Link>
                    <Link to="/experiencias">EXPERIÊNCIAS</Link>
                    <Link to="/contato">CONTATO</Link>
                </nav>
            </header>
        </>
    )
}

export default Header;