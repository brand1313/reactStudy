import Hello from './Hello';
import Counter from './Counter';
import Wrapper from './Wrapper';
import InputSample from './InputSample';
import UserList from './UserList';
import React, { useRef, useState } from 'react';
import CreateUser from './CreateUser';
import UserData from './UserData';

function App() {

  const [inputs, setInputs] = useState({
    username: '',
    email : ''
  });

  const { username, email } = inputs;

  const onChange = (e) => {
    const {name, value} = e.target;

    setInputs({
      ...inputs,
      [name] : value
    })
  }

  const [users, setUsers] = useState(UserData);

  const nextId = useRef(4);

  const onCreate = () => {

    const user = {
      id : nextId,
      username, 
      email,
      active : false
    }

    setUsers([
      ...users,
      user
    ]);  
  } 

  return (
    <Wrapper>
      {/* <Hello color="blue" name="김윤규" isSpecial/>
      <Hello/> */}
      {/* <Counter /> */}
      {/* <InputSample /> */}  
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
      <UserList users={users}/>
    </Wrapper>
  );
}

export default App;
