import logo from './logo.svg';
import './App.css';
import Cabecalho from './componentes/Cabecalho';
import Conteudo from './componentes/Conteudo';

function App() {
  return (
    <div className='container'>
      <Cabecalho />
      <Conteudo />
    </div>
  );
}

export default App;
