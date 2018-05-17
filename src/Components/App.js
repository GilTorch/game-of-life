import React, { Component } from 'react';
import '../App.css';
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
  console.log(this.props.board);
  
  App.timer=setInterval(this.props.tick,this.props.speed);
}
 
componentWillReceiveProps(newProps){
  // clearInterval(App.timer);
}

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Game Of Life</h1>
        </header>
          <div>
            <h2>Generation: <span>{this.props.generation}</span></h2>
          </div>
          <div>
            <Legends/>
          </div>
        <AppControls run={this.props.run} clear={this.props.clear} pause={this.props.pause}/>
        <div className="board-container">
          <Board board={this.props.board} {...this.props}/>
        </div>
        <div>
          <h2>Change Board Size:</h2>
          <SizeControls handleClick={(x,y)=>this.props.changeBoardSize(x,y)} />
        </div>
        <div>
          <h2>Change Simulation Speed:</h2>
          <SpeedControls handleClick={(x,y)=>this.props.changeSpeed(x,y)}/>
        </div>
      </div>
    );
  }
}

export default App;
