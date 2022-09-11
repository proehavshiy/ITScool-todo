import React, { FC } from 'react'
import uniqid from 'uniqid';
import { ITodo } from '../../types';
import Button from '../Button/Button';
import Form from '../Form/Form';
import './Header.css';

interface IHeader {
  todoItems: ITodo[];
  setTodoItems: (newTodos: ITodo[]) => void;
};

const Header: FC<IHeader> = ({ todoItems, setTodoItems }) => {

  const handleToggleAllBtn = () => {
    // change statuses of all ToDos
    let updatedTodos = todoItems;
    const checkStatuses = todoItems.every((todo) => todo.isDone === true);

    updatedTodos = checkStatuses
      ? updatedTodos.map(todo => {
        todo.isDone = false;
        return todo;
      })
      : updatedTodos.map(todo => {
        todo.isDone = true;
        return todo;
      })

    setTodoItems(updatedTodos);
  };

  const addNewTodo = (newTodoValue: string) => {
    setTodoItems([...todoItems,
    {
      id: uniqid(),
      isDone: false,
      isDisplay: true,
      isEditing: false,
      value: newTodoValue,
    }]);
  }

  return (
    <header className="header">
      <h1>todo list</h1>
      <Button
        styleClass='toggle-all'
        handleClick={handleToggleAllBtn}
      />
      <Form
        handleSubmit={addNewTodo} />
    </header >
  )
}

export default Header