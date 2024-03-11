import React from 'react';
import { Link } from 'react-router-dom';

export default function MenuWalleMart(props) {
  const estiloMenu = {
    conteudo: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    },
    botoesContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    botao: {
      margin: '10px',
      padding: '10px',
      fontSize: '16px',
      backgroundColor: '#8d36ff',
      color: 'white',
      borderRadius: '10%',
      cursor: 'pointer',
      textDecoration: 'none',
    },
  };

  return (
    <div style={estiloMenu.conteudo}>
      <div style={estiloMenu.botoesContainer}>
        <Link to="/cadastrofuncionario" style={estiloMenu.botao}>
          Cadastrar Funcionário
        </Link>
        <Link to="/cadastroitems" style={estiloMenu.botao}>
          Cadastrar Items
        </Link>
      </div>
    </div>
  );
}
