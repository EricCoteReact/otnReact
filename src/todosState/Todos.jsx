import React, { Component } from 'react';
import FilterButtons from './FilterButtons';
import AddTodo from './AddTodo';
import VisibleTodoList from './VisibleTodoList';

export default class Todos extends Component {
  state = { todos: [] , 
            visibilityFilter: "SHOW_ALL" //"SHOW_COMPLETED", "SHOW_ACTIVE" 
          };

  toggleTodo = (id) => {
    this.setState((prevState) => {
      let todo = prevState.todos.find((item) =>
                (item.id === id));
      todo.completed = !todo.completed;
      return { todos: prevState.todos };
    });
  };
  
  deleteTodo = (id) => {
    let position = this.state.todos.findIndex((todo) => todo.id===id);
    this.state.todos.splice(position,1)
    this.setState({todos: this.state.todos});
  }

  currentId=0
  addTodo = (todoText) => (
    this.setState((prevState) => (
      {
        todos: [
          ...prevState.todos,
          {
            id: this.currentId++,
            text: todoText,
            completed: false
          }
        ]
      }
    ))
  );

  changeFilter = (filter) => (
    this.setState({visibilityFilter: filter}));

  sortText = (a,b) => {
    const textA = a.text.toUpperCase(); // ignore upper and lowercase
    const textB = b.text.toUpperCase(); // ignore upper and lowercase
    if (textA < textB) {
      return -1;
    }
    if (textA > textB) {
      return 1;
    }
    // names must be equal
    return 0;
  }


  render = () => (
    <div >
      <h1>Todos (using state)</h1>
      <AddTodo onAddTodo={this.addTodo} />
      <FilterButtons 
          visibilityFilter={this.state.visibilityFilter} 
          onChangeFilter={this.changeFilter}  />  
      <VisibleTodoList 
              todos={this.state.todos}
              visibilityFilter={this.state.visibilityFilter} 
              onToggleTodo={this.toggleTodo} 
              onDelete={this.deleteTodo}   />
     </div>

  );
}



