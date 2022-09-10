import React, { FC } from 'react';
import { ITodo } from '../../types';
import Button from '../Button/Button';
import Header from '../Header/Header';
import TodoListView from '../TodoListView/TodoListView';
import './App.css';

const App: FC = () => {

  const todos: ITodo[] = [
    {
      id: '1',
      isDone: false,
      isDisplay: true,
      isEditing: false,
      value: 'hello',
    },
  ]
  return (
    <div className='app'>
      <Header />
      {/* <Button text='click' /> */}
      <main>
        <TodoListView todoItems={todos} />
      </main>
      App
    </div>
  )
}

export default App
