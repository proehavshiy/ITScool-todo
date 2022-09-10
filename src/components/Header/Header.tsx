import React, { FC } from 'react'
import Button from '../Button/Button';
import Form from '../Form/Form';
import './Header.css';

const Header: FC = () => {

  const handleToggleAllBtn = () => { }
  const addNewTodo = (newTodo: string) => {
    console.log('добавили новую туду', newTodo);
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