import FormularioItens from "../formulario_componente/formularioitems"
import TabelaItens from "../tabelas/TabelaItens"
import Pagina from "../templates/pagina";
import { useState } from "react";

export default function CadastroCliente(props){
    const [exibirTabela, setExibirTabela] = useState(true);
    
    if (exibirTabela){
        return (
            <Pagina>
                <h1>Lista de Itens</h1>
                <TabelaItens itens={[]}/>
            </Pagina>
        )
    }

    else{
        return(
            <div>
                <Pagina>
                    <h2>Itens Cadastrados</h2>
                    <FormularioItens/>
                </Pagina>
            </div>
        )
    }
}