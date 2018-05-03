import React from 'react';
import { ClientResponse } from 'http';


class Cell extends React.Component{
    constructor(props){
        super(props);

        this.state={
            alive:false
        }
    }

  
   
    toggleCellLife(){
        this.setState({
            alive:!this.state.alive
        });

        console.log(this.state.alive);
    }

    render(){
        return(
            <td className={this.state.alive?'cell':''} onClick={()=>this.toggleCellLife()}></td>
        )
    }
}

export default Cell;