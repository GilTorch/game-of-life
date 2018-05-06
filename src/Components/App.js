import React, { Component } from 'react';
import '../App.css';
import Board from './Board';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      rows:50,
      columns:30,
      timeInterval:1000,
      generation:0
    }

    // this.setBoardSize=this.setBoardSize.bind(this);
  }

  setBoardSize(rows,columns){

    this.setState({
      rows:rows,
      columns:columns
    });
  }

  run(){
    console.log('run');
  
  }

  pause(){
    console.log('pause');
  }

  clear(){
    console.log('clear');

    clearInterval(this.state.timer);
  }


  setSimulationSpeed(speedLevel){
    switch(speedLevel){
      case "SLOW":
        this.setState({
          interval:300
        })
      break;
      case "MEDIUM":
        this.setState({
          interval:200
        })
      break;
      case "FAST":
        this.setState({
          interval:100
        })
      break;
      default:
        console.log('Enter a valid speed level');
      break;
    }
  }

// componentDidMount(){
//   this.setState({
//     timer:setInterval(function(){
//       this.state.generation++;
//     },this.state.timeInterval)
//   });
// }
 
  render() {
    console.log('props from redux: '+this.props.rows);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Game Of Life</h1>
        </header>
        <div className="app-controls">
          <button onClick={()=>this.run()}>Run</button>
          <button onClick={()=>this.pause()}>Pause</button>
          <button onClick={()=>this.clear()}>Clear</button>
          <p>
            Generation: <span>{this.props.generation}</span>
          </p>
        </div>
        <div className="board-container">
          <Board columns={this.props.columns} rows={this.props.rows} {...this.props}/>
        </div>
        <div>
          <h2>Board Size</h2>
          <div className="board-size-controls">
            <button ref="small-size" onClick={()=>this.props.setBoardSize(50,30)}>50x30</button>
            <button ref="medium-size" onClick={()=>this.props.setBoardSize(70,50)}>70x50</button>
            <button ref="large-size" onClick={()=>this.props.setBoardSize(100,80)}>100x80</button>
          </div>
          <div className="app-speed-controls">
            <button  onClick={()=>this.props.setBoardSpeed("SLOW")}>slow</button>
            <button  onClick={()=>this.props.setBoardSpeed("MEDIUM")}>medium</button>
            <button  onClick={()=>this.props.setBoardSpeed("FAST")}>fast</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
