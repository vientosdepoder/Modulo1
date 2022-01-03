import React,{Component} from 'react';

class Nombre extends Component {
    constructor(props){
      //Llama a constructor de clase Component
      super(props);
      this.state = {value: ''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    
    }
    handleChange(event) {    this.setState({value: event.target.value});  }
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
            <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />        </label>
       
        
      );
    }
  }
  
  
  export default Nombre;
  