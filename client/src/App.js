import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props);
    this.buscarDados = this.buscarDados.bind(this);
  }

  buscarDados(){
    var url = 'http://localhost:3001/';
    var texto = fetch(url).then(res => res.json()).then(res => JSON.stringify(res));
    alert(texto);
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
