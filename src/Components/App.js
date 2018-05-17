import React, { Component } from 'react';
import '../css/App.css';
import Board from './Board';
import AppControls from './AppControls';
import SizeControls from './SizeControls';
import SpeedControls from './SpeedControls';
import Legends from './Legends';

class App extends Component {

  static timer;


  constructor(props){
    super(props);

    // this.setBoardSize=this.setBoardSize.bind(this);
  }

componentDidMount(){
  
  App.timer=this.createTimer(this.props.speed);
}
 
componentWillReceiveProps(newProps){
  if(newProps.cleared || newProps.paused){
    clearInterval(App.timer);
  }else{
    if(newProps.cleared!==this.props.cleared)
      App.timer=this.createTimer(newProps.speed);
  }

  
  if(newProps.speed!==this.props.speed){
    clearInterval(App.timer);
    App.timer=this.createTimer(newProps.speed);
  }

}

createTimer(speed){
  var timer=setInterval(this.props.tick,speed);
  return timer;
}

  render() {

    return (
      <div className="App">
          <div>
            <h2>Generation: <span>{this.props.generation}</span></h2>
          </div>
        
        <div className="board-container">
           <Legends/>  
          <Board board={this.props.board} {...this.props}/>
        </div>
        <div>
          <div>
            <h2>Change Board Size:</h2>
            <SizeControls handleClick={(x,y)=>this.props.changeBoardSize(x,y)} />
          </div>
          <div>
            <h2>Controls:</h2>
            <AppControls run={this.props.run} clear={this.props.clear} pause={this.props.pause}/>
          </div>
          <div>
            <h2>Change Simulation Speed:</h2>
            <SpeedControls handleClick={(x,y)=>this.props.changeSpeed(x,y)}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
