import React, { FC } from 'react';
import './TodoListView.css';
import uniqid from 'uniqid';
import { ITodo } from '../../types';
import TodoItem from './TodoItem/TodoItem';

interface ITodoListView {
  todoItems: ITodo[];
  setTodoItems: (newTodos: ITodo[]) => void;
};

const TodoListView: FC<ITodoListView> = ({ todoItems, setTodoItems }) => {

  const deleteTodo = (id: string | number) => {
    setTodoItems(todoItems.filter(todo => todo.id !== id));
  };

  const changeTodoStatus = (id: string | number) => {
    setTodoItems(todoItems.map(todo => {
      if (todo.id === id) todo.isDone = !todo.isDone
      return todo;
    }));
  };

  return (
    <ul className={'todo-list'}>
      {todoItems.map((toDo) => (
        <TodoItem
          toDo={toDo}
          deleteTodo={deleteTodo}
          changeTodoStatus={changeTodoStatus}
          key={uniqid()}
        />
      ))}
    </ul>
  )
}

export default TodoListView