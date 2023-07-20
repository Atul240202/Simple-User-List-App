import React from 'react';
import Card from './card';
import './css/formInputList.css';

const FormInputList = (props) => {
  return (
    <Card className='users'>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default FormInputList;
