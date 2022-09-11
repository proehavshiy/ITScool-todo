import React, { FC } from 'react';
import { FilterStatus, IFilter, ITodo } from '../../types';
import Counter from './Counter/Counter';
import Filters from './Filters/Filters';
import './Footer.css';

interface IFooter {
  todoItems: ITodo[];
  filter: IFilter;
  setFilter: (newFilterStatus: IFilter) => void;
};

const Footer: FC<IFooter> = ({ todoItems, filter, setFilter }) => {

  const todosLeft = todoItems.reduce((acc, curr) => {
    curr.isDone === false && acc++
    return acc
  }, 0);

  const updateFilter = (newFilterStatus: FilterStatus) => {
    setFilter({ currentStatus: newFilterStatus })
  }

  return (
    <footer className={'footer'}>
      <Counter count={todosLeft} />
      <Filters filterStatus={filter.currentStatus} updateFilter={updateFilter} />
    </footer>
  )
}

export default Footer;