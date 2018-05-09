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

// componentDidMount(){
//   this.setState({
//     timer:setInterval(function(){
//       this.state.generation++;
//     },this.state.timeInterval)
//   });
// }
 
  render() {

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
            Generation: <span>{this.state.generation}</span>
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
            <button  onClick={()=>this.props.setSimulationSpeed(500)}>slow</button>
            <button  onClick={()=>this.props.setSimulationSpeed(300)}>medium</button>
            <button  onClick={()=>this.props.setSimulationSpeed(100)}>fast</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
