import React, { FC } from 'react';
import './Counter.css';

interface ICounter {
  count: number;
};

const Counter: FC<ICounter> = ({ count }) => {

  return (
    <span className={'todo-count'}>
      <strong>
        {count}
      </strong>
      items left
    </span>
  )
}

export default Counter