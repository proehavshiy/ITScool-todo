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
    console.log('переключили все туду');
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