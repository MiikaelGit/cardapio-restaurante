import './style.css';
import { Cards } from "../Cards";
import { useState } from 'react';
import { buscarProduto, filtrarProdutos, produtosEntradas } from '../../services';
import { Buttons } from '../Buttons';
import { Form } from '../Form';


export function Content() {
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
            <Buttons
                botaoClicado={botaoClicado}
                onHandleFiltro={handleFiltro}
            />
            <Form
                textoBusca={textoBusca}
                handleBusca={handleBusca}
            />
            <section className="secao-pratos">
                <div className="titulo-pratos">
                    <h2>Cardápio</h2>
                </div>
                <div className="pratos-card">
                    {listaCardapio.map((produto) => (
                        <Cards
                            key={produto.id}
                            produto={produto}
                        />
                    ))}
                </div>
            </section>
        </main>
    )
}