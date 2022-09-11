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

  // переключение статусов всех тудушек в активные/выполненные
  const handleToggleAllBtn = () => {
    let updatedTodos = todoItems;

    // здесь провека: нужна, чтобы если есть выполненные тудушки, 
    // все остальные перевести тоже в статус выполненных.
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

  // добавление новой тудушки
  const addNewTodo = (newTodoValue: string) => {
    setTodoItems([...todoItems,
    {
      id: uniqid(),
      isDone: false,
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