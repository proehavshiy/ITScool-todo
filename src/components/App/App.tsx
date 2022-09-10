import React, { FC } from 'react';
import Button from '../Button/Button';
import Header from '../Header/Header';
import './App.css';

const App: FC = () => {
  return (
    <div className='app'>
      <Header />
      <Button text='click' />
      App
    </div>
  )
}

export default App
