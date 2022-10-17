import { useEffect, useState } from 'react';

import RegisterImg from '../../assets/register.svg';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { GoPrimitiveDot } from 'react-icons/go';
import { FaCheck } from 'react-icons/fa';

const Register = ({ onLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showIndicator, setShowIndicator] = useState(false);
  const [pass, setPass] = useState('');

  const [passLetter, setPassLetter] = useState(false);
  const [passNumber, setPassNumber] = useState(false);
  const [passSpecial, setPassSpecial] = useState(false);
  const [passLength, setPassLength] = useState(false);

  const [passComplete, setPassComplete] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleShowIndicator = () => {
    setShowIndicator(true);
  };

  useEffect(() => {
    // check lower and uppercase
    if (pass.match(/([a-z].*[A-Z]|.*[a-z])/)) {
      setPassLetter(true);
    } else {
      setPassLetter(false);
    }

    // check for numbers
    if (pass.match(/([0-9])/)) {
      setPassNumber(true);
    } else {
      setPassNumber(false);
    }

    // check for special char
    if (pass.match(/([!@#$%^&*?_~])/)) {
      setPassSpecial(true);
    } else {
      setPassSpecial(false);
    }

    // at least 8 chars
    if (pass.length >= 8) {
      setPassLength(true);
    } else {
      setPassLength(false);
    }
  }, [pass]);

  return (
    <div className='main-container --flex-center'>
      <div className='form-container'>
        <form className='--form-control'>
          <h2 className='--color-danger  --text-center'>Register</h2>
          <input type='text' className='--width-100' placeholder='Username' />
          <input type='email' className='--width-100' placeholder='Email' />

          <div className='password'>
            <input
              type={showPassword ? 'text' : 'password'}
              className='--width-100'
              placeholder='Password'
              onFocus={handleShowIndicator}
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
            <span className='icon' onClick={handleTogglePassword}>
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </div>
          <button className='--btn --btn-primary --btn-block'>Register</button>

          <span className='--text-sm --block'>
            Have an account?{' '}
            <a href='#' className='--text-sm' onClick={onLogin}>
              Login
            </a>
          </span>
          {/* password strength Indicator */}
          <div className={showIndicator ? 'show-indicator' : 'hide-indicator'}>
            <ul className='--list-style-none --card --bg-grey --text-sm --p '>
              <p className='--text-sm'> Password Strength Indicator </p>
              <li className={passLetter ? 'pass-green' : 'pass-red'}>
                <span className='--align-center'>
                  {passLetter ? <FaCheck /> : <GoPrimitiveDot />}
                  &nbsp; Lowercase & Uppercase
                </span>
              </li>
              <li className={passNumber ? 'pass-green' : 'pass-red'}>
                <span className='--align-center'>
                  {passNumber ? <FaCheck /> : <GoPrimitiveDot />}
                  &nbsp; Numbers(0-9)
                </span>
              </li>
              <li className={passSpecial ? 'pass-green' : 'pass-red'}>
                <span className='--align-center'>
                  {passSpecial ? <FaCheck /> : <GoPrimitiveDot />}
                  &nbsp; Special Character (!@$#%^&*)
                </span>
              </li>
              <li className={passLength ? 'pass-green' : 'pass-red'}>
                <span className='--align-center'>
                  {passLength ? <FaCheck /> : <GoPrimitiveDot />}
                  &nbsp; At least 8 Characters
                </span>
              </li>
            </ul>
          </div>
        </form>
      </div>
      <div className='img-container'>
        <img src={RegisterImg} alt='login' />
      </div>
    </div>
  );
};

export default Register;
