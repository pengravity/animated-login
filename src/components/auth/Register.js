import { useEffect, useState } from 'react';

import RegisterImg from '../../assets/register.svg';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { GoPrimitiveDot } from 'react-icons/go';
import { FaCheck } from 'react-icons/fa';

const Register = ({ onLogin, onShowPassword, onTogglePassword }) => {
  const [showIndicator, setShowIndicator] = useState(false);
  const [pass, setPass] = useState('');

  const [passLength12, setPassLength12] = useState(false);
  const [passLetter, setPassLetter] = useState(false);
  const [passNumber, setPassNumber] = useState(false);
  const [passSpecial, setPassSpecial] = useState(false);
  const [passLength, setPassLength] = useState(false);

  const [passComplete, setPassComplete] = useState(false);

  const handleShowIndicator = () => {
    setShowIndicator(true);
  };

  useEffect(() => {
    //at least 12 characters

    if (pass.length >= 12) {
      setPassLength12(true);
    } else {
      setPassLength12(false);
    }

    // check lower and uppercase letters
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
    if (
      passLength12 ||
      (passLetter && passNumber && passSpecial && passLength)
    ) {
      setPassComplete(true);
    } else {
      setPassComplete(false);
    }
  }, [pass, passLetter, passLength, passNumber, passSpecial, passLength12]);

  return (
    <div className='main-container --flex-center'>
      <div className='form-container'>
        <form className='--form-control'>
          <h2 className='--color-danger  --text-center'>Register</h2>
          <input type='text' className='--width-100' placeholder='Username' />
          <input type='email' className='--width-100' placeholder='Email' />

          <div className='password'>
            <input
              type={onShowPassword ? 'text' : 'password'}
              className='--width-100'
              placeholder='Password'
              onFocus={handleShowIndicator}
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
            <span className='icon' onClick={onTogglePassword}>
              {onShowPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </div>
          <button
            disabled={!passComplete}
            className={
              passComplete
                ? '--btn --btn-primary --btn-block'
                : '--btn --btn-primary --btn-block btn-disabled'
            }
          >
            Register
          </button>

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

              <li className={passLength12 ? 'pass-green' : 'pass-red'}>
                <span className='--align-center'>
                  {passLength12 ? <FaCheck /> : <GoPrimitiveDot />}
                  &nbsp; At least 12 Characters OR
                </span>
              </li>

              <li>-----------------------------</li>

              <li className={passLength ? 'pass-green' : 'pass-red'}>
                <span className='--align-center'>
                  {passLength ? <FaCheck /> : <GoPrimitiveDot />}
                  &nbsp; At least 8 Characters
                </span>
              </li>

              <li className={passLetter ? 'pass-green' : 'pass-red'}>
                <span className='--align-center'>
                  {passLetter ? <FaCheck /> : <GoPrimitiveDot />}
                  &nbsp; Lowercase & Uppercase letters
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
