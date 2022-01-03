import React,{Component} from 'react';

class Variable extends Component {
    constructor(props){
      //Llama a constructor de clase Component
      super(props);
      this.state = {value: ''};
      this.handleChange = this.handleChange.bind(this);
    
    }
    handleChange(event) {    this.setState({value: event.target.value});  }
   
  
    render() {
      return (
        <div>
          <label>
            {this.props.etiqueta}
            <input type={this.props.tipo} value={this.state.value} onChange={this.handleChange} />       
           </label>
        </div>  
      
       
      );
    }
  }
  
  
  export default Variable;
  