import Lupa from '../../assets/lupa.png'
import './style.css';
import Cards from "../Cards";
import Entrada from '../../assets/entrada.png';
import Massa from '../../assets/massa.png';
import Carne from '../../assets/carne.png';
import Bebidas from '../../assets/bebidas.png';
import Salada from '../../assets/salada.png';
import Sobremesa from '../../assets/sobremesa.png';
import { useState } from 'react';
import { buscarProduto, filtrarProdutos, produtosEntradas } from '../../services';


export default function Conteudo() {
    const [listaCardapio, setListaCardapio] = useState(produtosEntradas);
    const [botaoClicado, setBotaoClicado] = useState('Entradas');
    const [textoBusca, setTextoBusca] = useState('')

    const handleFiltro = (categoria) => {
        setListaCardapio(filtrarProdutos(categoria))
        setBotaoClicado(categoria);
        setTextoBusca('');
    }

    const handleBusca = (textoDigitado) => {
        setTextoBusca(textoDigitado);
        setBotaoClicado('')
        setListaCardapio(buscarProduto(textoDigitado))
    }

    return (
        <main>
            <section>
                <button className={botaoClicado === 'Entradas' ? 'btn-ativo' : ''} onClick={() => handleFiltro('Entradas')}><img src={Entrada} alt="" />Entradas</button>
                <button className={botaoClicado === 'Massas' ? 'btn-ativo' : ''} onClick={() => handleFiltro('Massas')}><img src={Massa} alt="" />Massas</button>
                <button className={botaoClicado === 'Carnes' ? 'btn-ativo' : ''} onClick={() => handleFiltro('Carnes')}><img src={Carne} alt="" />Carnes</button>
                <button className={botaoClicado === 'Bebidas' ? 'btn-ativo' : ''} onClick={() => handleFiltro('Bebidas')}><img src={Bebidas} alt="" />Bebidas</button>
                <button className={botaoClicado === 'Saladas' ? 'btn-ativo' : ''} onClick={() => handleFiltro('Saladas')}><img src={Salada} alt="" />Saladas</button>
                <button className={botaoClicado === 'Sobremesas' ? 'btn-ativo' : ''} onClick={() => handleFiltro('Sobremesas')}><img src={Sobremesa} alt="" />Sobremesas</button>
            </section>
            <form className="campo-busca">
                <img src={Lupa} alt="" />
                <input
                    value={textoBusca}
                    onChange={(event) => handleBusca(event.target.value)}
                    type="text" placeholder="Pesquise aqui um dos pratos do nosso cardápio" />
            </form>
            <section className="secao-pratos">
                <div className="titulo-pratos">
                    <h2>Cardápio</h2>
                </div>
                <div className="pratos-card">
                    {listaCardapio.map((produto) => (
                        <Cards key={produto.id} produto={produto} />
                    ))}
                </div>
            </section>
        </main>
    )
}