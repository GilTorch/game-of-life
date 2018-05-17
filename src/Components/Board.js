import React, {Component} from 'react';

import Cell from './Cell';

class Board extends Component {

    constructor(props){
        super(props);
        this.state={
            generation:0,
            interval:1000
        }
    }

    shouldComponentUpdate(nextProps){
        return nextProps.board!==this.props.board;
    }

    render() {        

        return (
            <table className="board">
                <tbody>
                {this.props.board.map((row,i)=>
                    <tr key={i}>
                        {row.map((element,j)=>
                          <Cell key={j} alive={this.props.board[i][j].status} newborn={this.props.board[i][j].newborn}  handleClick={()=>this.props.toggleCellState(i,j)}/>
                        )}
                    </tr>
                )}
                </tbody>
            </table>
        )
    }
}

export default Board;
