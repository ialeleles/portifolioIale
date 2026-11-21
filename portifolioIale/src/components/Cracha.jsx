function Cracha() {
    return (
        <div className="cracha">
            <div className="cracha-header">
                <h1 className="cracha-titulo">IDENTIFICATION DIVISION</h1>
            </div>

            <div className="cracha-conteudo">
                <img className="cracha-foto" src="/ialeprofile.png" alt="Foto de identificação"></img>

                <div className="cracha-informacoes">
                    <p className="cracha-titulo-info">NOME</p>
                    <p className="cracha-info">Iale Leles de Almeida</p>

                    <p className="cracha-titulo-info">FORMAÇÃO</p>
                    <p className="cracha-info">Engenharia de Software, PUC Minas</p>

                    <p className="cracha-titulo-info">BASE</p>
                    <p className="cracha-info">Minas Gerais, Brasil</p>

                    <p className="cracha-titulo-info">STATUS</p>
                    <p className="cracha-info">Disponível</p>
                </div>
            </div>

            <div className="cracha-footer">

            </div>
        </div>
    )
}

export default Cracha;