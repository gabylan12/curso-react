import React from 'react';

import './App.css';

class MyForm extends React.Component {
    state = {
      nombre: "",
      apellido: "",
      edad: "",
      email: "",
      genero: "",
      carta: ""
    }
 
    handleChange = (event) => {
        
        this.setState({[event.target.name]: event.target.value});
        console.log(event.target.name + "=" +event.target.value);
    }

    handleSubmit = (event) => {
      //var values = this.state.children;
      
      console.log(this.state);
      event.preventDefault();
    }

 
 render () {
  return (<form onSubmit={this.handleSubmit}>
    <label>Nombre<input name="nombre" type="text" value={this.state.nombre} onChange={this.handleChange} /></label><br></br>
    <label>Apellido<input name="apellido" type="text" value={this.state.apellido} onChange={this.handleChange} /></label><br></br>
    <label>Edad<input name="edad" type="text" value={this.state.edad} onChange={this.handleChange} /></label><br></br>
    <label>Email<input name="email" type="text"  value={this.state.email} onChange={this.handleChange} /></label><br></br>
    <label>Genero<select name="genero" value={this.state.genero} onChange={this.handleChange} >
                    <option value="masculino">Masculino</option>
                    <option value="Femenino">Femenino</option>
                    <option value="NoEspecifica">No especifica</option>
                    </select>
    </label><br></br>
    <label>Carta de presentacion<textarea name="carta" value={this.state.carta} onChange={this.handleChange}></textarea></label><br></br>
    <input type="submit" value="Enviar"/>
  </form>);
}
}

function App() {
  
 return ( <MyForm />);
 
  
}

export default App;
