import React, { FC, useState } from 'react';
import { IFilter, ITodo } from '../../types';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import TodoListView from '../TodoListView/TodoListView';
import './App.css';

const App: FC = () => {

  // стейт тудушек с начальным состоянием для примера
  const [todos, setTodos] = useState<ITodo[]>([
    {
      id: '1',
      isDone: false,
      value: 'example todo',
    }
  ]);

  // стейт для фильтрации
  const [filter, setFilter] = useState<IFilter>({ currentStatus: 'all' });

  // геттер для отображения тудушек в зависимости от статуса фильтра
  const filteredTodos = () => {
    switch (filter.currentStatus) {
      case 'completed':
        return todos.filter(todo => todo.isDone)
      case 'active':
        return todos.filter(todo => !todo.isDone)
      default:
        return todos;
    }
  };

  return (
    <div className='app'>
      <Header
        todoItems={todos}
        setTodoItems={setTodos}
      />
      <main>
        <TodoListView
          todoItems={filteredTodos()}
          setTodoItems={setTodos}
        />
      </main>
      <Footer
        todoItems={todos}
        setTodoItems={setTodos}
        filter={filter}
        setFilter={setFilter}
      />
    </div>
  )
}

export default App
