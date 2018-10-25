import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';
import {ListGroup} from 'reactstrap';

const TodoList = ({ todos, onDelete, onToggleTodo }) => (
  <ListGroup className="my-4">
    {todos.map(todo =>
      <TodoItem
        key={todo.id}
        {...todo}
        onClick={() => onToggleTodo(todo.id)}
        onDelete={(e) => {
            e.stopPropagation();
            onDelete(todo.id);
          }  
        }
    
      />
    )}
  </ListGroup>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onToggleTodo: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default TodoList;



