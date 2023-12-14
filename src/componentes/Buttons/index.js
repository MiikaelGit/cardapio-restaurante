import './style.css'
import Entrada from '../../assets/entrada.png';
import Massa from '../../assets/massa.png';
import Carne from '../../assets/carne.png';
import Bebidas from '../../assets/bebidas.png';
import Salada from '../../assets/salada.png';
import Sobremesa from '../../assets/sobremesa.png';

export function Buttons({ botaoClicado, onHandleFiltro }) {

    return (
        <section>
            <button className={botaoClicado === 'Entradas' ? 'btn-ativo' : ''} onClick={() => onHandleFiltro('Entradas')}><img src={Entrada} alt="" />Entradas</button>
            <button className={botaoClicado === 'Massas' ? 'btn-ativo' : ''} onClick={() => onHandleFiltro('Massas')}><img src={Massa} alt="" />Massas</button>
            <button className={botaoClicado === 'Carnes' ? 'btn-ativo' : ''} onClick={() => onHandleFiltro('Carnes')}><img src={Carne} alt="" />Carnes</button>
            <button className={botaoClicado === 'Bebidas' ? 'btn-ativo' : ''} onClick={() => onHandleFiltro('Bebidas')}><img src={Bebidas} alt="" />Bebidas</button>
            <button className={botaoClicado === 'Saladas' ? 'btn-ativo' : ''} onClick={() => onHandleFiltro('Saladas')}><img src={Salada} alt="" />Saladas</button>
            <button className={botaoClicado === 'Sobremesas' ? 'btn-ativo' : ''} onClick={() => onHandleFiltro('Sobremesas')}><img src={Sobremesa} alt="" />Sobremesas</button>
        </section>
    )
}