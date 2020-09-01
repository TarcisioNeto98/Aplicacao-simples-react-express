import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props);
    this.buscarDados = this.buscarDados.bind(this);
  }

  buscarDados(){
  }
  
  render(){
    return (
      <div className="App">
        <form action={this.buscarDados}>
          <input id="nome" type="text" name="nome"/>
          <input type="submit" value="Enviar"/>
        </form>
      </div>
    );
  }
}

export default App;
