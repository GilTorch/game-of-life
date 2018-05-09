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

    checkCellNeighbours(){
        // 1.if a live cell has 4 or more live neighbours = death (overpopulation)
        // 2.if a live cell has 0 or 1 neighbour=death (isolation)
        // 3.if a dead cell has 3 neighbours make you come alive 
    
    
        }

    render() {

        const board=[];
        var cellKey=0;
        for(var i=0;i<this.props.rows;i++){
            var columns=[];
            for(var j=0;j<this.props.columns;j++){
                columns.push(<Cell row={i} col={j} key={cellKey} cellId={cellKey} {...this.props}/>);
                cellKey++;
            }
            board.push(<tr key={i}>{columns}</tr>);
        }
       
        

        return (
            <table className="board">
                <tbody>
                {board}
                </tbody>
            </table>
        )
    }
}

export default Board;
