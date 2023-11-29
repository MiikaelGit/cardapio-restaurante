import './style.css';

export default function Cards({ produto }) {
    return (
        <div className='cards'>
            <figure>
                <img src={produto.imagem} alt={produto.nome} />
            </figure>
            <div className='cards-informacao'>
                <div className='cards-texto'>
                    <h3>{produto.nome}</h3>
                    <small>{produto.categoria}</small>
                    <p>{produto.descricao}</p>
                </div>

                <div className='cards-preco'>
                    <span>{new Intl.NumberFormat("pt-br", { style: 'currency', currency: 'BLR' }).format(produto.preco)}</span>
                </div>
            </div>
        </div>
    )
}