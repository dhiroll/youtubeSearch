import './index.css';

import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import config from "./config";
import registerServiceWorker from './registerServiceWorker';

console.log(config);
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
