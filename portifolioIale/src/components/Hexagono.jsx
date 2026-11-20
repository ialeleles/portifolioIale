function Hexagono({ posicao, children }) {
    return <div className={`hexagono ${posicao}`}>{children}</div>;
}

export default Hexagono;