import './App.css';
import BarraDireita from './componentes/BarraDireita/BarraDireita';
import BarraEsquerda from './componentes/BarraEsqueda/BarraEsquerda';
import Feed from './componentes/Feed/Feed';
import Stories from './componentes/Stories/Stories';


function App() {
  return (
    <div className="corpo">
      <div className="barra-esquerda">
         <BarraEsquerda />
      </div>
      <div className='conteudo-centro'>
        <Stories />
        <Feed 
        nome_perfil="Sidoka '^"
        nome_perfil2='Veigh'
        nome_perfil3='VoidAppend'
        />
      </div>
      <div className="barra-direita">
        <BarraDireita />
      </div>
      
    </div>
  );
}

export default App;
