import React from 'react';
import PropTypes from 'prop-types';
import TodoList from './TodoList';
import { VisibilityFilters } from './FilterList';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
}

const VisibleTodoList = (props) => (
  <TodoList todos={getVisibleTodos(props.todos,props.visibilityFilter)} 
            onToggleTodo={props.onToggleTodo}
            
  />
); 

VisibleTodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onToggleTodo: PropTypes.func.isRequired,
};

export default VisibleTodoList;