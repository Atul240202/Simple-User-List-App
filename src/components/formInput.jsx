import React, { useState } from 'react';
import './css/formInput.css';
import Card from './card';
import Button from './button';
import ErrorModal from './errorModal';

const FormInput = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState('');

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredAge.trim().length === 0 || enteredUsername.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name & age (non-empty values).',
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }
    console.log('Hey, you are accessing addUserHandler function');
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredAge('');
    setEnteredUsername('');
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className='input'>
        <form onSubmit={addUserHandler}>
          <label htmlFor='username'>Username</label>
          <input
            id='username'
            type='text'
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor='age'>Age</label>
          <input
            id='age'
            type='number'
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default FormInput;
