import FormularioItens from "../formulario_componente/formularioitens"
import TabelaItens from "../tabelas/TabelaItens"
import Pagina from "../templates/pagina";
import { useState } from "react";

export default function CadastroCliente(props){
    const [exibirTabela, setExibirTabela] = useState(true);
    const [listaItens, setListaItens] = useState([]);
 
    if (exibirTabela){
        return (
            <Pagina>
                <h1>Lista de Itens</h1>
                <TabelaItens listaItens={[listaItens]} setExibirTabela={setExibirTabela}/>
            </Pagina>
        )
    }

    else{
        return(
            <div>
                <Pagina>
                    <h2>Itens Cadastrados</h2>
                    <FormularioItens setExibirTabela={setExibirTabela}
                    listaItens = {listaItens}
                    setListaItens={setListaItens}
                    />
                </Pagina>
            </div>
        )
    }
}