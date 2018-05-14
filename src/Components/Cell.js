import React from 'react';


const Cell=({alive,handleClick})=>{
    return(
        <td className={(alive===1)?"cell":""}  onClick={handleClick}></td>
    )
}

export default Cell;