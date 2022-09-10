import React, { FC, useState } from 'react';
import './Form.css';

interface IForm {
  handleSubmit: (inputVal: string) => void;
};

const Form: FC<IForm> = ({ handleSubmit }) => {
  const [inputVal, setInputVal] = useState<string>('');

  return (
    <form className={'form'} name="form" noValidate autoComplete="off"
      onSubmit={(e) => {
        e.preventDefault();

        // update store in case of not empty input
        if (inputVal) {
          handleSubmit(inputVal);
          setInputVal('');
        };
      }}
    >
      <input
        className={'new-todo'}
        placeholder={'What needs to be done?'}
        type="text"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
    </form>
  )
}

export default Form