import React, { FC } from 'react';
import { ITodo } from '../../types';
import Counter from './Counter/Counter';
import './Footer.css';

interface IFooter {
  todoItems: ITodo[];
};

const Footer: FC<IFooter> = ({ todoItems }) => {

  const todosLeft = todoItems.reduce((acc, curr) => {
    curr.isDone === false && acc++
    return acc
  }, 0);

  return (
    <footer className={'footer'}>
      <Counter count={todosLeft} />
      {/* <Counter />
      <Filters /> */}
    </footer>
  )
}

export default Footer;