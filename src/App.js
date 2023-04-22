import React, { useEffect } from 'react';
import axios from 'axios';
import LoginForm from './Components/LoginForm';

const App = () => {
  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
  }, []);

  return (
    <div>
      <h1>Login Form</h1>
      <LoginForm />
    </div>
  );
};

export default App;
