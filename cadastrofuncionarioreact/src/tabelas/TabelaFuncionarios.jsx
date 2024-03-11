import Pagina from "../templates/pagina";
import { Table } from "react-bootstrap";
export default function TabelaFuncionarios(props){
    return(
        <div>
            <h1>Lista de Funcionarios</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>/</th>
                            <th>Nome_funcionario</th>
                            <th>Data_nascimento</th>
                            <th>Genero</th>
                            <th>EstadoCivil</th>
                            <th>RG</th>
                            <th>CEP</th>
                            <th>Telefone</th>
                            <th>Email</th>
                            <th>Cargo</th>
                            <th>Salario</th>
                            <th>Beneficios</th>
                            <th>Escolaridade</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                            props.items.map((funcionario, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{funcionario.Nome_func}</td>
                                        <td>{funcionario.Data_nas_func}</td>
                                        <td>{funcionario.Genero_func}</td>
                                        <td>{funcionario.EstadoCivil_func}</td>
                                        <td>{funcionario.RG_func}</td>
                                        <td>{funcionario.CEP_func}</td>
                                        <td>{funcionario.Telefone_func}</td>
                                        <td>{funcionario.Email_func}</td>
                                        <td>{funcionario.Cargo_func}</td>
                                        <td>{funcionario.Salario_func}</td>
                                        <td>{funcionario.Beneficios_func}</td>
                                        <td>{funcionario.Escolaridade_func}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
        </div>
    )
}