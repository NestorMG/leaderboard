import React from 'react';
import Stopwatch from './Stopwatch';
import Players from './Players';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isNameEmpty: true,
            isAgeEmpty: true,
            players: Players,
        }
        this.players = []; //Propiedad del formulario
        this.handleChange = this.handleChange.bind(this);
        this.handleClickSave = this.handleClickSave.bind(this);
    };
    handleClickSave(){
        let player = {
            name: document.getElementsByName("Name")[0].value,
            age: document.getElementsByName("Age")[0].value
        };

        this.players.push(player);
        this.setState({ players: this.players });
       
        Players.push(player);//Esta es la parte que ingresa nuevos datos
     
    }
    handleChange(e){
        let inputName = e.target.name; //obtienes el nombre del html
        let value = e.target.value; //Obtienes el valor del input
        let attrib = `is${inputName}Empty`;

        value.length === 0 ? this.setState({[attrib]: true}) : this.setState({[attrib]: false});
    }

    render(){
        return(<div className="form-personal-data">
            <input type="text" name="Name" id="" onChange = {this.handleChange}/>
            <input type="text" name="Age" id="" onChange = {this.handleChange}/>
            <button disabled={ !this.state.isAgeEmpty && !this.state.isNameEmpty ? false : true } id="save" onClick={ this.handleClickSave }>Save</button>
            <button disabled={ !this.state.isAgeEmpty && !this.state.isNameEmpty ? false : true }> Start</button>
            <Stopwatch />
        </div>)
    }
};

export default Form;
//https://upmostly.com/tutorials/react-onchange-events-with-examples