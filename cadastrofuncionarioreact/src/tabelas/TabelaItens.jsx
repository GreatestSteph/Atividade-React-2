import { Button, Table } from "react-bootstrap";
export default function TabelaItens(props){
    return(
        <div>
            <Button onClick={() => {
                props.setExibirTabelaItens(false);
            }}>
                Cadastrar Novo Item</Button>

            <h1>Lista de Itens</h1>
                <Table>
                    <thead>
                        <tr>
                            <th>/</th>
                            <th>Nome_prod</th>
                            <th>Data_fab</th>
                            <th>Data_ven</th>
                            <th>Tipo_prod</th>
                            <th>Preco_prod</th>
                            <th>Qtde_prod</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.listaItens?.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.Nome_prod}</td>
                                        <td>{item.Data_fab}</td>
                                        <td>{item.Data_ven}</td>
                                        <td>{item.Tipo_prod}</td>
                                        <td>{item.Preco_prod}</td>
                                        <td>{item.Qtde_prod}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
        </div>
    )
}