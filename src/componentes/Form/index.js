import Lupa from '../../assets/lupa.png';

export function Form({ textoBusca, handleBusca }) {
    return (
        <form className="campo-busca">
            <img src={Lupa} alt="" />
            <input
                value={textoBusca}
                onChange={(event) => handleBusca(event.target.value)}
                type="text" placeholder="Pesquise aqui um dos pratos do nosso cardápio" />
        </form>
    )
}