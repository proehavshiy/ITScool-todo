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
  console.log('new todos', todos);

  const [filter, setFilter] = useState<IFilter>({ currentStatus: 'all' });

  return (
    <div className='app'>
      <Header todoItems={todos} setTodoItems={setTodos} />
      <main>
        <TodoListView todoItems={todos} />
      </main>
      <Footer todoItems={todos} filter={filter} setFilter={setFilter} />
    </div>
  )
}

export default App
