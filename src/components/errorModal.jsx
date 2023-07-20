import React from 'react';
import './css/errorModal.css';
import Card from './card';
import Button from './button';

const ErrorModal = (props) => {
  return (
    <div>
      <div className='backdrop' onClick={props.onConfirm} />
      <Card className='modal'>
        <header className='header'>
          <h2>{props.title}</h2>
        </header>
        <div className='content'>
          <p>{props.message}</p>
        </div>
        <footer className='actions'>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
