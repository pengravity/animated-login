import './AuthContainer.scss';
import { useState } from 'react';

import Login from './Login';
import Register from './Register';
import Reset from './Reset';

const AuthContainer = () => {
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  const [reset, setReset] = useState(true);

  const handleRegister = () => {
    setLogin(false);
    setRegister(true);
  };

  const handleReset = () => {
    setLogin(false);
    setReset(true);
  };

  const handleLogin = () => {
    setLogin(true);
    setRegister(false);
    setReset(false);
  };

  return (
    <section className='--flex-center --100vh  '>
      <div className='container box'>
        {login && <Login onRegister={handleRegister} onReset={handleReset} />}
        {register && <Register onLogin={handleLogin} />}
        {reset && <Reset onLogin={handleLogin} />}
      </div>
    </section>
  );
};

export default AuthContainer;
