import React, { FC } from 'react';
import './TodoListView.css';
import uniqid from 'uniqid';
import { ITodo } from '../../types';
import TodoItem from './TodoItem/TodoItem';

interface ITodoListView {
  todoItems: ITodo[];
};

const TodoListView: FC<ITodoListView> = ({ todoItems }) => {
  // get arrOfToDos from redux store
  // const arrayOfToDoItems = useSelector(state => state[LSNAME_TODO])

  return (
    <ul className={'todo-list'}>
      {todoItems.map((toDo) => (
        <TodoItem
          toDo={toDo}
          key={uniqid()}
        />
      ))}
    </ul>
  )
}

export default TodoListView