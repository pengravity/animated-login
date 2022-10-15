import ResetImg from '../../assets/forgot.svg';
import { SlClose } from 'react-icons/sl';

const Reset = () => {
  return (
    <div className='main-container --flex-center'>
      <div className='form-container reset'>
        <form className='--form-control'>
          <h2 className='--color-danger  --text-center'>Reset Password</h2>
          <input type='email' className='--width-100' placeholder='Email' />

          <button className='--btn --btn-primary --btn-block'>
            Reset Password
          </button>

          <span className='--text-sm --block --text-center'>
            We will send you a reset link!
          </span>
          <div className='close'>
            <SlClose className='--color-danger' size={32} />
          </div>
        </form>
      </div>
      <div className='img-container'>
        <img src={ResetImg} alt='login' />
      </div>
    </div>
  );
};

export default Reset;
