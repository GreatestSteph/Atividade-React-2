import FormularioFuncionarios from "../formulario_componente/formulariofuncionario";
import TabelaFuncionarios from "../tabelas/TabelaFuncionarios"
import Pagina from "../templates/pagina";
import { useState } from "react";

export default function CadastroFuncionarios(props){
    const [exibirTabela, setExibirTabelaFuncionarios] = useState(true);
    const [listaFuncionarios, setListaFuncionarios] = useState([]);
    
    if (exibirTabela){
        return (
            <Pagina>
                <h2>Funcionários Cadastrados</h2>
                <br/>
                <h2>Lista de Funcionários</h2>
                <TabelaFuncionarios listaFuncionarios={listaFuncionarios} setExibirTabelaFuncionarios={setExibirTabelaFuncionarios}/>
            </Pagina>
        )
    }

    else{
        return(
            <div>
                <Pagina>
                    <h2>Funcionários Cadastrados</h2>
                    <br/>
                    <h2>Lista de Funcionários</h2>
                    <FormularioFuncionarios 
                    setExibirTabelaFuncionarios={setExibirTabelaFuncionarios}
                    listaFuncionarios = {listaFuncionarios}
                    setListaFuncionarios = {setListaFuncionarios}
                    />
                </Pagina>
            </div>
        )
    }
}