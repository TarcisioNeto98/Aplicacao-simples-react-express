import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props);
    this.buscarDados = this.buscarDados.bind(this);
    this.mostrarDados = this.mostrarDados.bind(this);
  }

  mostrarDados(arq){
    alert(JSON.stringify(arq));
  }

  buscarDados(){
    var url = 'http://localhost:3001/banco/alunos';
    fetch(url).catch(e => console.error(e));
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
