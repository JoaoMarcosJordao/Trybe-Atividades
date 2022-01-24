      // Content.jsx
      import React, { Component } from 'react';

      const conteudos = [
        {
          conteudo: 'High Order Functions',
          bloco: 8,
          status: 'Aprendido'
        },
        {
          conteudo: 'Composição de Componentes',
          bloco: 11,
          status: 'Aprendendo',
        },
        {
          conteudo: 'Composição de Estados',
          bloco: 12,
          status: 'Aprenderei'
        },
        {
          conteudo: 'Redux',
          bloco: 16,
          status: 'Aprenderei'
        },
      ]
      class Content extends Component {
        render() {
          return (
            conteudos.map(({ conteudo, bloco, status }) => (
              <div key={conteudo} className = 'card'>
              <h4>{`O conteudo é: ${conteudo}`}</h4>
              <p>{`Bloco: ${bloco}`}</p>
              <p>{`Status: ${status}`}</p>
              </div>
            ))
          );
        }
      }

      export default Content;