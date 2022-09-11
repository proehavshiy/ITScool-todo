import React, { FC, useEffect, useRef, useState } from 'react';
import { ITodo, newTodoValue } from '../../../types';
import './TodoItem.css';

const SUMBIT_KEYCODE = 13;

type Handler = (id: string | number) => void;

interface ITodoItem {
  toDo: ITodo;
  deleteTodo: Handler;
  changeTodoStatus: Handler;
  changeTodoValue: ({ id, newValue }: newTodoValue) => void;
};

const TodoItem: FC<ITodoItem> = ({ toDo, deleteTodo, changeTodoStatus, changeTodoValue }) => {
  const { id, value } = toDo;

  const inputRef = useRef<HTMLInputElement>(null);
  const [input, setInput] = useState(value);
  const [editingMode, setEditingMode] = useState(false);

  const handleCheckBox = () => changeTodoStatus(id);
  const handleDelete = () => deleteTodo(id);
  const handleDoubleClick = () => setEditingMode(true);
  const handleChangeValue = (e: React.KeyboardEvent) => {
    // by pressing Enter renew a value of ToDo in case of not empty input value
    if (e.keyCode === SUMBIT_KEYCODE && input) {
      changeTodoValue({ id, newValue: input });
      setEditingMode(false);
    }
  };

  useEffect(() => {
    const closeToDoEditingMode = (e: MouseEvent) => {
      // if click event is out of the ToDo editing input change editingMode to false in all ToDos
      if (e.target !== inputRef.current) setEditingMode(false);
    }
    window.addEventListener('click', closeToDoEditingMode)
    return () => { window.removeEventListener('click', closeToDoEditingMode) }
  }, [])

  return (
    <li
      className={`todoItem ${editingMode && 'editing'}`}
    >
      <input
        className={'itemCheckBox'}
        type="checkbox"
        onChange={handleCheckBox}
        checked={toDo.isDone}
      />
      <label
        className={'labelContent'}
        onDoubleClick={handleDoubleClick}
      >
        {value}
      </label>
      <input className={'edit'}
        type="text"
        value={input}
        ref={inputRef}
        onChange={(e) => setInput(e.target.value)}
        onKeyUp={handleChangeValue}
      />
      <button
        className={'remove'}
        onClick={handleDelete}
      />
    </li>
  )
}

export default TodoItem