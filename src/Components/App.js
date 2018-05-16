import React, { Component } from 'react';
import '../App.css';
import Board from './Board';

class App extends Component {



  constructor(props){
    super(props);

    // this.setBoardSize=this.setBoardSize.bind(this);
  }

componentDidMount(){
  console.log(this.props);
  setInterval(this.props.tick,this.props.speed)
}
 
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Game Of Life</h1>
        </header>
        <div className="app-controls">
          <button onClick={()=>this.props.run()}>Run</button>
          <button onClick={()=>this.props.pause()}>Pause</button>
          <button onClick={()=>this.props.clear(this.props.rows,this.props.columns)}>Clear</button>
          <p>
            Generation: <span>{this.props.generation}</span>
          </p>
        </div>
        <div className="board-container">
          <Board board={this.props.board} {...this.props}/>
        </div>
        <div>
          <h2>Board Size</h2>
          <div className="board-size-controls">
            <button ref="small-size" onClick={()=>this.props.changeBoardSize(50,30)}>50x30</button>
            <button ref="medium-size" onClick={()=>this.props.changeBoardSize(70,50)}>70x50</button>
            <button ref="large-size" onClick={()=>this.props.changeBoardSize(100,80)}>100x80</button>
          </div>
          <div className="app-speed-controls">
            <button  onClick={()=>this.props.changeSpeed(300)}>slow</button>
            <button  onClick={()=>this.props.changeSpeed(100)}>medium</button>
            <button  onClick={()=>this.props.changeSpeed(50)}>fast</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
