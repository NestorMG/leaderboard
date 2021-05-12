import React from 'react';
import Stopwatch from './Stopwatch';
import Players from './Players';

class Form extends React.Component {
    constructor(props) {
        super(props);
        
        //States
        this.state = {
            isNameEmpty: true,
            isAgeEmpty: true,
            players: Players,
            isSaved: false, 
        };

        //Properties
        this.players = []; 
        this.handleChange = this.handleChange.bind(this);
        this.handleClickSave = this.handleClickSave.bind(this);
        this.handleClickReset = this.handleClickReset.bind(this);
    
    };
    handleClickSave(){
        //Note: Refactor with a obj
        let player = Players.find(player => {
            return player.name === document.getElementsByName("Name")[0].value;
        });
        
        if(!player) {

            player = {
                name: document.getElementsByName("Name")[0].value,
                lastName: document.getElementsByName("Age")[0].value
            };

            this.players.push(player);
            this.setState({ players: this.players });//In this moment is when the component is changing
            this.setState({ isSaved: true });//why is it changing ? 

            Players.push(player); //Esta es la parte que ingresa nuevos datos
           
        }else{
            document.getElementsByName("Start")[0].disabled=true;
            this.setState( { isSaved: true });
        }
    }
    handleChange(e){
        let inputName = e.target.name; //obtienes el nombre del html
        let value = e.target.value; //Obtienes el valor del input
        let attrib = `is${inputName}Empty`;

        value.length === 0 ? this.setState({[attrib]: true}) : this.setState({[attrib]: false});
    }

    handleClickReset(){
        Players.splice(0, Players.length);//alows us to delete all player
        this.setState({players: []});
    }
    render(){
       
        return(<div className="form-personal-data">
            <div className="data">
                <label htmlFor="Name">Name</label>
                <input type="text" name="Name" id="" onChange = {this.handleChange}/>
                <label htmlFor="Age">Last Name</label>
                <input type="text" name="Age" id="" onChange = {this.handleChange}/>
                <button disabled={ !this.state.isAgeEmpty && !this.state.isNameEmpty ? false : true } id="save" onClick={ this.handleClickSave }>Save</button>
                <button onClick={this.handleClickReset}>Reset</button>
            </div>
            <Stopwatch players = { this.state.players } isSaved= {this.state.isSaved}/>
        </div>)
    }
};

export default Form;
//https://upmostly.com/tutorials/react-onchange-events-with-examples