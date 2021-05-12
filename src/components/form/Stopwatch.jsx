import React  from 'react'; 
import Players from './Players';
import LeaderBoard from './LeaderBoard';

class Stopwatch extends React.Component{
    //Create a sp
    constructor(props){
        super(props);
      
        this.state = {
            isActivate: false,
            cs: 0,
            seconds: 0,
            minutes: 0,
            players: props.players,
            isSaved: props.isSaved,
        }
       
        this.cs = 0;
        this.seconds = 0;
        this.minutes = 0;
        this.timer = this.timer.bind(this);
        this.handleClickStopwatch = this.handleClickStopwatch.bind(this);
        this.findPlayer = this.findPlayer.bind(this);
    }

    handleClickStopwatch(){
       
        if(!this.state.isActivate){
            this.timerId = setInterval( () => {this.timer() }, 10);
            this.setState( { isActivate: true });
        }else{  
            clearInterval(this.timerId);
            this.setState({ isActivate: false });
            const player = this.state.players.find((player) => player.name === document.getElementsByName("Name")[0].value);            
            player["time"] = document.getElementsByClassName("time")[0].textContent;
            this.setState({ players: Players });
            this.cs = 0;
            this.seconds = 0;
            this.minutes = 0;
            this.setState({cs: 0, seconds: 0,  minutes: 0 });
        }
    }
 
    timer() {
        if(this.cs === 99) {
            this.cs = 0;
            this.seconds++;
            this.setState( { seconds: this.seconds });
        } 

        if(this.seconds === 59){
            this.seconds = 0;
            this.minutes++;
            this.setState( { minutes: this.minutes });
        }

        this.cs++;
        this.setState({ cs: this.cs });
    }

    findPlayer(){
        let player = this.state.players.find((player) => {
            return player.name === document.getElementsByName("Name")[0].value;
        }); 
        return player ? false : true ;
    }

    render(){
        return(<div>
            <h1 className="time">{this.state.minutes <= 9 ? 0 : ''}{this.state.minutes}:{this.state.seconds<=9 ? 0 : ''}{this.state.seconds}:{this.state.cs<=9 ? 0 : ''}{this.state.cs}</h1>
            <button  name="Start"  onClick={this.handleClickStopwatch} disabled={this.findPlayer()}>Iniciar</button>
            <LeaderBoard players = { this.state.players }/>
        </div>);
    }
}

export default Stopwatch;