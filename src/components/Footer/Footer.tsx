import React, { FC } from 'react';
import { FilterStatus, IFilter, ITodo } from '../../types';
import Counter from './Counter/Counter';
import Filters from './Filters/Filters';
import './Footer.css';

interface IFooter {
  todoItems: ITodo[];
  setTodoItems: (newTodos: ITodo[]) => void;
  filter: IFilter;
  setFilter: (newFilterStatus: IFilter) => void;
};

const Footer: FC<IFooter> = ({ todoItems, setTodoItems, filter, setFilter }) => {

  // счетчик активных тудушек
  const todosLeft = todoItems.reduce((acc, curr) => {
    curr.isDone === false && acc++;
    return acc;
  }, 0);

  // переключение статуса фильтрации
  const updateFilter = (newFilterStatus: FilterStatus) => {
    setFilter({ currentStatus: newFilterStatus })
  };

  // удалить разом все выполненные тудушки
  const deleteCompletedTodos = () => {
    setTodoItems(todoItems.filter(todo => !todo.isDone))
  }

  return (
    <footer className={'footer'}>
      <Counter
        count={todosLeft}
      />
      <Filters
        filterStatus={filter.currentStatus}
        updateFilter={updateFilter}
        deleteCompletedTodos={deleteCompletedTodos}
      />
    </footer>
  )
}

export default Footer;