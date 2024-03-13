import Cabecalho from "./cabecalho_componente/cabecalho";
import FormularioFuncionarios from "./formulario_componente/formulariofuncionario";
import MenuWalleMart from "./menu_componente/menu_wallemart";
import FormularioItens from "./formulario_componente/formularioitens"
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
              <FormularioFuncionarios/>
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
              <FormularioItens/>
            </div>
          }/>


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
