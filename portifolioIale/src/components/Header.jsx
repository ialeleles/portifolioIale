import { Link, NavLink } from "react-router-dom";

function Header() {
    return (
        <>
            <header className="header">
                <h1 className="titulo">IALE LELES</h1>

                <nav className="nav">
                    <NavLink to="/">PERFIL</NavLink>
                    <NavLink to="/projetos">PROJETOS</NavLink>
                    <NavLink to="/experiencias">EXPERIÊNCIAS</NavLink>
                    <NavLink to="/contato">CONTATO</NavLink>
                </nav>
            </header>
        </>
    )
}

export default Header;