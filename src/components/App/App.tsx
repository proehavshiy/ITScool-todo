import React, { FC, useState } from 'react';
import { IFilter, ITodo } from '../../types';
import Button from '../Button/Button';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import TodoListView from '../TodoListView/TodoListView';
import './App.css';

const App: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([
    {
      id: '1',
      isDone: false,
      isDisplay: true,
      isEditing: false,
      value: 'example todo',
    }
  ])
  const [filter, setFilter] = useState<IFilter>({ currentStatus: 'all' });

  return (
    <div className='app'>
      <Header />
      <main>
        <TodoListView todoItems={todos} />
      </main>
      <Footer todoItems={todos} filter={filter} setFilter={setFilter} />
    </div>
  )
}

export default App
