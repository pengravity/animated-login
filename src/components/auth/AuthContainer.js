import './AuthContainer.scss';
import { useState } from 'react';

import Login from './Login';
import Register from './Register';
import Reset from './Reset';

const AuthContainer = () => {
  const [auth, setAuth] = useState({
    login: true,
    register: false,
    reset: false,
  });

  const handleLogin = () => {
    setAuth({ login: true, register: false, reset: false });
  };

  const handleRegister = () => {
    setAuth({ login: false, register: true, reset: false });
  };

  const handleReset = () => {
    setAuth({ login: false, register: false, reset: true });
  };

  return (
    <section className='--flex-center --100vh  '>
      <div className='container box'>
        {auth.login && (
          <Login onRegister={handleRegister} onReset={handleReset} />
        )}
        {auth.register && <Register onLogin={handleLogin} />}
        {auth.reset && <Reset onLogin={handleLogin} />}
      </div>
    </section>
  );
};

export default AuthContainer;
