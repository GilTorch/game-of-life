import React from 'react';


const Cell=(props)=>{
    return(
        <td className={(props.board[props.row][props.col]===1)?'cell':''} onClick={()=>props.toggleCellState(props.row,props.col)}></td>
    )
}

export default Cell;