import Cabecalho from "./cabecalho_componente/cabecalho.jsx";
import MenuWalleMart from "./menu_componente/menu_wallemart.jsx";

import ExibirCadastroFuncionarios from "./tabelas/funcionariosCadastrados.jsx"
import ExibirCadastroItens from "./tabelas/itensCadastrados.jsx"

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>


          <Route path="cadastrofuncionario" element={  
            <div>
              <br/>
              <Cabecalho/>
              <br/>
              <br/>
              <br/>
              <ExibirCadastroFuncionarios/> 
            </div>
          }/>


          <Route path="/" element={ 
          <div>
            <br/>
              <Cabecalho/>
              <br/>
              <MenuWalleMart/>
          </div>
          }/>


          <Route path="cadastroitens" element={  
            <div>
              <br/>
              <Cabecalho/>
              <br/>
              <br/>
              <br/>
              <ExibirCadastroItens/> 
            </div>
          }/>





        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
