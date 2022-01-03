import logo from './logo.svg';
import './App.css';

import React,{Component} from 'react';
import Nombre from './Nombre';
import Variable from './Variable';

class App extends Component {
  constructor(props){
    //Llama a constructor de clase Component
    super(props);
    this.state={
      titulo:"Formulario de registro",
      campos:[
        {
          nombre:"Nombre",
          tipo:"text"
        },
        {
          nombre:"Apellido",
          tipo:"text"
        },
        {
          nombre:"eMail",
          tipo:"text"
        },
        {
          nombre:"Telefono",
          tipo:"text"
        },
        {
          nombre:"Contrasena",
          tipo:"password"
        },
        {
          nombre:"CContrasena",
          tipo:"password"
        },
      ]
    }
    
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  
/*
    Nombre
    Apellido
    Email
    Telefono
    Password
    Confirmar password
    */

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
       {this.state.campos.map(element=><Variable etiqueta={element.nombre} tipo={element.tipo}/>)}
      
      <input type="submit" value="Submit" />
      </form>

    );
  }
}


export default App;
