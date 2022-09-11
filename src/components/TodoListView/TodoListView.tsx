import React, { FC } from 'react';
import './TodoListView.css';
import uniqid from 'uniqid';
import { ITodo, newTodoValue } from '../../types';
import TodoItem from './TodoItem/TodoItem';

interface ITodoListView {
  todoItems: ITodo[];
  setTodoItems: (value: React.SetStateAction<ITodo[]>) => void;
};

const TodoListView: FC<ITodoListView> = ({ todoItems, setTodoItems }) => {

  const deleteTodo = (id: string | number) => {
    setTodoItems(todoItems.filter(todo => todo.id !== id));
  };

  // переключение режима редактирования тудушки
  const changeTodoStatus = (id: string | number) => {
    setTodoItems(todoItems.map(todo => {
      if (todo.id === id) todo.isDone = !todo.isDone
      return todo;
    }));
  };

  // изменение текста тудушки
  const changeTodoValue = ({ id, newValue }: newTodoValue) => {
    setTodoItems((prevState) => {
      prevState.map(todo => {
        if (todo.id === id) todo.value = newValue;
        return todo;
      })
      return prevState;
    })
  }

  return (
    <ul className={'todo-list'}>
      {todoItems.map((toDo) => (
        <TodoItem
          toDo={toDo}
          deleteTodo={deleteTodo}
          changeTodoStatus={changeTodoStatus}
          changeTodoValue={changeTodoValue}
          key={uniqid()}
        />
      ))}
    </ul>
  )
}

export default TodoListView