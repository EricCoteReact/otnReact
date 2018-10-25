import React, { Component } from 'react';
import FilterButtons from './FilterButtons';
import AddTodo from './AddTodo';
import VisibleTodoList from './VisibleTodoList';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/index.js';

export default class Todos extends Component {
  
  store = createStore(rootReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  render = () => (
    <Provider store={this.store}>
      <div >
        <h1>Todos (using Redux)</h1>
        <AddTodo  />
        <FilterButtons   />  
        <VisibleTodoList  />
      </div>
    </Provider>
  );
}



