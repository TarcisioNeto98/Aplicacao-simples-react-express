import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props);
    this.buscarDados = this.buscarDados.bind(this);
    this.mostrarDados = this.mostrarDados.bind(this);
  }

  mostrarDados(arq){
    alert(arq.neto);
  }

  buscarDados(){
    var url = 'http://localhost:3001/banco/inserir/alunos';
    var usuario = {id: 13, nome: 'red', chave: 2};
    axios.post(url, usuario).then(res => res.data).then(data => this.mostrarDados(data)).catch(e => console.error(e));
  }
  
  render(){
    return (
      <div className="App">
        <form onSubmit={this.buscarDados}>
          <input id="nome" type="text" name="nome"/>
          <input type="submit" value="Enviar"/>
        </form>
      </div>
    );
  }
}

export default App;
