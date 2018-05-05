import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GameOfLife from './GameOfLife';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<GameOfLife/>, document.getElementById('root'));
registerServiceWorker();
