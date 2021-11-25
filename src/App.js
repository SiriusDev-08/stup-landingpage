import './App.css';
import imagem from './images/icone-azul.png'; 

export function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="center">
            <div className="menu">
              <div className="item-menu"> 
                <div className="logo"> 
                  <img src={imagem} alt= "logo" width="100px" />
                  <h3> UpHouse </h3>
                </div>
                <a href="https://www.canva.com/design/DAEZQAqFBlA/ajWO20My1MC5jo3HlirzMg/edit#1"> Saiba mais </a>
              </div>
              <div classsName="call"> 
                <h2 className="firstcall"> Sua nova solução em gestão de obras: simples, acessível, dinâmico. </h2>
                <p> Insira seu melhor email... </p>
                <h2 className="endcall"> UpHouse, elevando o padrão da sua obra. </h2>
              </div>
        
      

          </div>


        </div>



      </div>
    </div>
  );
}

