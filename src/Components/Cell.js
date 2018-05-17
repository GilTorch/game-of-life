import React from 'react';


// const Cell=({alive,newborn,handleClick})=>{
//     return(
//         <td className={(alive===0)?"":(newborn===1)?"cell":"old-cell"}  onClick={handleClick}></td>
//     )
// }


class Cell extends React.Component{

    constructor(props){
        super(props);
    }

    shouldComponentUpdate(nextProps){
        return nextProps.alive!==this.props.alive || nextProps.newborn!==this.props.newborn;
    }

    render(){
        return(
            <td className={(this.props.alive===0)?"":(this.props.newborn===1)?"cell":"old-cell"}  onClick={this.props.handleClick}></td>
        )
    }

}


export default Cell;