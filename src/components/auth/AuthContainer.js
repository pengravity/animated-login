import './AuthContainer.scss';
import Login from './Login';

const AuthContainer = () => {
  return (
    <section className='--flex-center --100vh  '>
      <div className='container box'>
        <Login />
      </div>
    </section>
  );
};

export default AuthContainer;
