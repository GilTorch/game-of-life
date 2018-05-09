import React from 'react';
import { ClientResponse } from 'http';


class Cell extends React.Component{
    constructor(props){
        super(props);

        this.state={
            alive:false
        }
    }

  
   
    toggleCellLife(row,col){
        this.setState({
            alive:!this.state.alive
        });

        console.log(this.state.alive);
    }


    render(){
        return(
            <td className={(this.props.board[this.props.row][this.props.col]===1)?"cell":""}  onClick={()=>this.props.toggleCellState(this.props.row,this.props.col)}></td>
        )
    }
}

export default Cell;