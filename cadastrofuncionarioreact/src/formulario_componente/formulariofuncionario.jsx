import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';

export default function FormularioFuncionarios(props) {
    const estiloFormulario = {
        marginTop: '2.5%',
        width: '100%',            
        padding: '10px',          
        color: 'black',
    };

    const [valido, setValidado] = useState(false);
    const [enviadoComSucesso, setEnviadoComSucesso] = useState(false);

    function manipularEnvio(evento) {
        evento.preventDefault();
        evento.stopPropagation();
        const formulariofuncionario = evento.currentTarget;
        if (formulariofuncionario.checkValidity() === false) {
            setValidado(false);
            setEnviadoComSucesso(false);
        }
        else{
            setValidado(true);
            setEnviadoComSucesso(true);
        }
    }

    const [funcionario, setFuncionario] = useState({
        Nome_func: "",
        Data_nas_func: "",
        Genero_func: "",
        EstadoCivil_func: "",
        RG_func: "",
        CEP_func: "",
        Telefone_func: "",
        Email_func: "",
        Cargo_func: "",
        Salario_func: "",
        Beneficios_func: "",
        Escolaridade_func: "",
    });

    function manipularMudança(evento) {
        const componentefuncionario = evento.currentTarget;
        setFuncionario({ ...funcionario, [componentefuncionario.name]: componentefuncionario.value})
    }

    return (
        <div style={estiloFormulario}>
            <h3>Cadastre um Funcionário!</h3>
            <br/>
            <Form noValidate validated={valido} onSubmit={manipularEnvio}>
            <Row className="mb-3">
                <Form.Group as={Col} md="3" controlId="campo1">
                    <Form.Label>Nome completo</Form.Label>
                    <Form.Control type="text" placeholder="Nome Completo" required value={funcionario.Nome_func} id="Nome_func" name="Nome_func" onChange={manipularMudança}/>
                    <Form.Control.Feedback type='invalid'>Insira o nome completo e corretamente!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="campo2">
                    <Form.Label>Data de Nascimento</Form.Label>
                    <Form.Control type="date" placeholder="Data de Nascimento" required value={funcionario.Data_nas_func} onChange={manipularMudança} id="Data_nas_func" name="Data_nas_func"/>
                    <Form.Control.Feedback type='invalid'>Insira sua data de nascimento correta!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="campo3">
                    <Form.Label>Sexo</Form.Label>
                    <Form.Control as="select" required value={funcionario.Genero_func} onChange={manipularMudança} id="Genero_func" name="Genero_func">
                        <option value="">Selecione...</option>
                        <option>Masculino</option>
                        <option>Feminino</option>
                    </Form.Control>
                    <Form.Control.Feedback type='invalid'>Selecione seu sexo!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="campo4">
                    <Form.Label>Estado Civil</Form.Label>
                    <Form.Control as="select" required value={funcionario.EstadoCivil_func} onChange={manipularMudança} id="EstadoCivil_func" name="EstadoCivil_func">
                        <option value="">Selecione...</option>
                        <option>Solteiro(a)</option>
                        <option>Casado(a)</option>
                        <option>Divorciado(a)</option>
                        <option>Viúvo(a)</option>
                    </Form.Control>
                    <Form.Control.Feedback type='invalid'>Selecione seu estado civil!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="campo6">
                    <Form.Label>RG</Form.Label>
                    <Form.Control type="text" placeholder="RG" required value={funcionario.RG_func} onChange={manipularMudança} id="RG_func" name="RG_func"/>
                    <Form.Control.Feedback type='invalid'>Insira o RG corretamente!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="campo7">
                    <Form.Label>CEP</Form.Label>
                    <Form.Control type="text" placeholder="CEP" required value={funcionario.CEP_func} onChange={manipularMudança} id="CEP_func" name="CEP_func"/>
                    <Form.Control.Feedback type='invalid'>Insira o CEP corretamente!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="campo8">
                    <Form.Label>Telefone</Form.Label>
                    <Form.Control type="tel" placeholder="Telefone" required value={funcionario.Telefone_func} onChange={manipularMudança} id="Telefone_func" name="Telefone_func"/>
                    <Form.Control.Feedback type='invalid'>Insira o telefone corretamente!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="campo9">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" required value={funcionario.Email_func} onChange={manipularMudança} id="Email_func" name="Email_func"/>
                    <Form.Control.Feedback type='invalid'>Insira o email corretamente!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="campo10">
                    <Form.Label>Cargo</Form.Label>
                    <Form.Control type="text" placeholder="Cargo" required value={funcionario.Cargo_func} onChange={manipularMudança} id="Cargo_func" name="Cargo_func"/>
                    <Form.Control.Feedback type='invalid'>Insira o cargo corretamente!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="campo11">
                    <Form.Label>Salário</Form.Label>
                    <Form.Control type="text" placeholder="Salário" required value={funcionario.Salario_func} onChange={manipularMudança} id="Salario_func" name="Salario_func"/>
                    <Form.Control.Feedback type='invalid'>Insira o salário corretamente!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="campo12">
                    <Form.Label>Benefícios</Form.Label>
                    <Form.Control type="text" placeholder="Benefícios" required value={funcionario.Beneficios_func} onChange={manipularMudança} id="Beneficios_func" name="Beneficios_func"/>
                    <Form.Control.Feedback type='invalid'>Insira o benefício corretamente!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="campo13">
                    <Form.Label>Escolaridade</Form.Label>
                    <Form.Control as="select" required value={funcionario.Escolaridade_func} onChange={manipularMudança} id="Escolaridade_func" name="Escolaridade_func">
                        <option value="">Selecione...</option>
                        <option>Fundamental</option>
                        <option>Médio</option>
                        <option>Superior</option>
                        <option>Pós-graduação</option>
                        <option>Doutorado</option>
                    </Form.Control>
                    <Form.Control.Feedback type='invalid'>Selecione sua escolaridade!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <br/>
            <Button type="submit">Enviar</Button>
            <Button onClick={()=>{
                props.setExibirTabela(true);
            }}>Voltar</Button>
        </Form>
        {enviadoComSucesso && (<div style={{ marginTop: '10px', color: 'green' }}>
          Enviado com sucesso!
        </div>)}
        </div>
    );

}