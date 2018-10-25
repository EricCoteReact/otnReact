import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


//let content2= React.createElement("h1",null, "Hello World")
// DOM Nodes are lowercase
// React Components start with an uppercase

ReactDOM.render(<App name="Eric" age={47} >
                   This is the children content!!!
                </App>, document.getElementById('root'));


