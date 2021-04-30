import React from 'react';
import Players from './Players';

class LeaderBoard extends React.Component{
    constructor(props){
        super(props);
        //console.log(props);
        this.state = {
            players: props,
        }
    }
    render(){
        return(<div>
            <table>
                <tr>
                    <th>Position </th>
                    <th>Name</th>
                    <th>Time</th>
                </tr>
                <tr>
                {
                  this.state.players.props.map((player) => {
                    return(
                    <tr>
                        <th>{player.name}</th>
                        <th>{player.age}</th>
                        <th>{player.time}</th>
                    </tr>)
                  })
                }
                </tr>
                
            </table>
            </div>);
    }
}

export default LeaderBoard;