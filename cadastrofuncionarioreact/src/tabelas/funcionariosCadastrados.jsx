import FormularioFuncionarios from "../formulario_componente/formulariofuncionario";
import TabelaFuncionarios from "../tabelas/TabelaFuncionarios"
import Pagina from "../templates/pagina";
import { useState } from "react";

export default function CadastroCliente(props){
    const [exibirTabela, setExibirTabela] = useState(true);
    
    if (exibirTabela){
        return (
            <Pagina>
                <h1>Lista de funcionários</h1>
                <TabelaFuncionarios funcionarios={[]}/>
            </Pagina>
        )
    }

    else{
        return(
            <div>
                <Pagina>
                    <h2>Funcionários Cadastrados</h2>
                    <FormularioFuncionarios/>
                </Pagina>
            </div>
        )
    }
}