import React, { FC, useRef } from 'react';
import { ITodo } from '../../../types';
import './TodoItem.css';

const SUMBIT_KEYCODE = 13;

interface ITodoItem {
  toDo: ITodo;
};

const TodoItem: FC<ITodoItem> = ({ toDo }) => {
  const { id, value, isDisplay } = toDo;
  const inputRef = useRef<HTMLInputElement>(null);

  // const dispatch = useDispatch()
  const handleCheckBox = () => (console.log('handleCheckBox'));
  const handleDelete = () => (console.log('handleDelete'));
  const handleDoubleClick = () => (console.log('handleDoubleClick'));

  // const handleCheckBox = () => dispatch(changeStatus({ id }))
  // const handleDelete = () => dispatch(deleteToDo({ id }))
  // const handleDoubleClick = () => dispatch(changeEditingMode({ id }))
  const handleChangeValue = (e: React.KeyboardEvent) => {
    // by pressing Enter renew a value of ToDo in case of not empty input value
    if (e.keyCode === SUMBIT_KEYCODE && inputRef.current) {
      console.log('сменили вэлью туду', e.keyCode, inputRef.current)
      // dispatch(changeValue({
      //   id,
      //   newValue: e.target.value
      // }))
      // and close editingMode
      // dispatch(changeEditingMode({ id }))
    }
  }

  return (
    <li
      className={`todoItem ${'editing' && toDo.isEditing}`}
      style={{ display: isDisplay ? 'block' : 'none' }}
    >
      <input
        className={'itemCheckBox'}
        type="checkbox"
        onChange={handleCheckBox}
        checked={toDo.isDone}
      />
      <label
        className={'labelContent'}
        // value={value}
        onDoubleClick={handleDoubleClick}
      >
        {value}
      </label>
      <input className={'edit'}
        id={'editInput'}
        type="text"
        defaultValue={value}
        onKeyUp={handleChangeValue}
        ref={inputRef}
      />
      <button
        className={'remove'}
        onClick={handleDelete}
      />
    </li>
  )
}

export default TodoItem