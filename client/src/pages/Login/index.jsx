import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import { clearErrors, login } from '~/redux/actions/user.action.js';
import { FieldInput, Button } from '~/components';

import ReCAPTCHA from 'react-google-recaptcha';

const cx = classNames.bind(styles);

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { error, isAuthenticated } = useSelector((state) => state.user);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errorMessage, setErrorMessage] = useState('');

  const redirect = location.search ? location.search.split('=')[1] : '/dashboard';

  const handleFormSubmitLogin = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (error) {
      setErrorMessage(error);
      dispatch(clearErrors());
    }
    if (isAuthenticated) {
      navigate(`${redirect}`);
    }
  }, [error, dispatch, navigate, redirect, isAuthenticated]);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <form className={cx('form')} onSubmit={handleFormSubmitLogin}>
          <h5 className={cx('heading')}>LOG IN TO YOUR ACCOUNT</h5>
          <FieldInput
            label="Email"
            name="email"
            value={email || ''}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FieldInput
            value={password || ''}
            onChange={(e) => setPassword(e.target.value)}
            toggle
            label="Password"
            name="password"
            type="password"
          />
          <ReCAPTCHA
            style={{ marginBottom: '2rem' }}
            sitekey="6LfdV9YgAAAAADUCOehrYfwSAQRntl5z3SmEBC6G"
          />
          <p
            style={{
              marginBottom: '1rem',
              textAlign: 'center',
              color: '#ff7979',
              fontSize: '1.4rem',
              fontWeight: 400,
            }}
          >
            {errorMessage}
          </p>
          <Button disable={!password | !email ? true : false} primary fullWidth>
            Login
          </Button>
          <div className={cx('span-bottom')}>
            <Link to="/forgotpassword">Forgot your password?</Link>
          </div>
        </form>
        <div className={cx('register')}>
          <span>Don't have an account? </span>
          <Link to="/register">Register</Link>
        </div>
        <ul className={cx('register-footer')}>
          <li>
            <Link to="/privacynotice">Privacy Notice</Link>
          </li>
          <li>
            <Link to="">Cookies Notice</Link>
          </li>
          <li>
            <Link to="">Cookies Settings</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Login;
