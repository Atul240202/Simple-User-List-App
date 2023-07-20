import React, { useState } from 'react';
import FormInput from './components/formInput';
import FormInputList from './components/formInputList';

function App() {
  const [inputData, setInputData] = useState([]);

  const addUserHandler = (userName, userAge) => {
    setInputData((prevUserList) => {
      return [
        ...prevUserList,
        { name: userName, age: userAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <div>
        <FormInput onAddUser={addUserHandler} />
        <FormInputList users={inputData} />
      </div>
    </div>
  );
}

export default App;
