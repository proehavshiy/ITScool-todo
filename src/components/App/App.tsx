import React, { FC } from 'react';
import { ITodo } from '../../types';
import Button from '../Button/Button';
import Footer from '../Footer/Footer';
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
      <main>
        <TodoListView todoItems={todos} />
      </main>
      <Footer />
    </div>
  )
}

export default App
