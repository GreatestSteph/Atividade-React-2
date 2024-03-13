import FormularioItens from "../formulario_componente/formularioitens"
import TabelaItens from "../tabelas/TabelaItens"
import Pagina from "../templates/pagina";
import { useState } from "react";

export default function CadastroItens(props){
    const [exibirTabela, setExibirTabelaItens] = useState(true);
    const [listaItens, setListaItens] = useState([]);
 
    if (exibirTabela){
        return (
            <Pagina>
                <h2>Itens Cadastrados</h2>
                <br/>
                <h2>Lista de Itens</h2>
                <TabelaItens listaItens={listaItens} setExibirTabelaItens={setExibirTabelaItens}/>
            </Pagina>
        )
    }

    else{
        return(
            <div>
                <Pagina>
                    <h2>Itens Cadastrados</h2>
                    <br/>
                    <h2>Lista de Itens</h2>
                    <FormularioItens 
                        setExibirTabelaItens={setExibirTabelaItens}
                        listaItens = {listaItens}
                        setListaItens={setListaItens}
                    />
                </Pagina>
            </div>
        )
    }
}