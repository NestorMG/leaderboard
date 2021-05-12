import React from 'react';
import Players from './Players';

class LeaderBoard extends React.Component{
    constructor(props){
        super(props);
        //console.log(props);
        this.state = {
            players: props.players,
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
               
                {
                
                  this.state.players.sort((a, b) => {
                      if(a.time < b.time){
                          return -1;
                      }
                      if(a.time > b.time) {
                          return 1;
                      }
                      return 0;
                  }).map((player) => {
                    return(
                        <tr>
                    
                            <td>{player.name}</td>
                            <td>{player.lastName}</td>
                            <td>{player.time}</td>
                        </tr>)
                  })
                  
                }
              
                
            </table>
            </div>);
    }
}

export default LeaderBoard;