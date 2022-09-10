import React, { FC } from 'react'
import './Button.css';

interface IButton {
  styleClass?: string;
  id?: string;
  type?: 'button' | 'submit' | 'reset';
  text?: string;
  isDisabled?: boolean;
  isActive?: boolean;
  handleClick?: () => void;
}
const Button: FC<IButton> = ({ styleClass = '', id = 'button', type = 'button', text, isDisabled = false, isActive = false, handleClick }) => {

  return (
    <button
      className={`${styleClass} ${isActive ? 'selected' : ''}`}
      id={id}
      type={type}
      disabled={isDisabled}
      onClick={handleClick}
    >
      {text}
    </button>
  )
}

export default Button