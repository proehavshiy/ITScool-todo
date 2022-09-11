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

  const todosLeft = todoItems.reduce((acc, curr) => {
    curr.isDone === false && acc++
    return acc
  }, 0);

  const updateFilter = (newFilterStatus: FilterStatus) => {
    setFilter({ currentStatus: newFilterStatus })
  };

  const deleteCompletedTodos = () => {
    setTodoItems(todoItems.filter(todo => !todo.isDone))
  }

  return (
    <footer className={'footer'}>
      <Counter count={todosLeft} />
      <Filters filterStatus={filter.currentStatus} updateFilter={updateFilter} deleteCompletedTodos={deleteCompletedTodos} />
    </footer>
  )
}

export default Footer;