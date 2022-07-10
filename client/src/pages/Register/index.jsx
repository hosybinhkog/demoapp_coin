import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Register.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { validate } from '~/utils/validate';
import ReCAPTCHA from 'react-google-recaptcha';
import { FieldInput, Button } from '~/components';
import { register } from '~/redux/actions/user.action';
import { CREATE_USER_CLEAR_ERROR, CREATE_USER_RESET } from '~/constants';

const cx = classNames.bind(styles);

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { success, error } = useSelector((state) => state.register);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errors, setErrors] = useState();
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmitFormRegister = (e) => {
    e.preventDefault();

    const errorsCheck = validate({ email, password, username });

    if (errorsCheck.number > 0) {
      setErrors(errorsCheck);
      return;
    }

    const formData = new FormData();

    formData.set('password', password);
    formData.set('username', username);
    formData.set('email', email);

    dispatch(register(formData));
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    if (error) {
      setErrorMessage(error);
      dispatch({ type: CREATE_USER_CLEAR_ERROR });
    }

    if (success) {
      dispatch({ type: CREATE_USER_RESET });
      navigate('/');
    }
  }, [error, dispatch, success, navigate]);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <form onSubmit={onSubmitFormRegister} className={cx('form')} encType="multipart/form-data">
          <h5 className={cx('heading')}>REGISTER</h5>
          <FieldInput
            label="Username"
            name="username"
            value={username || ''}
            onBlur={() => setErrors({ ...errors, username: null })}
            onChange={(e) => setUsername(e.target.value)}
            errorMessage={errors?.username && errors.username}
          />
          <FieldInput
            onChange={(e) => setEmail(e.target.value)}
            value={email || ''}
            onBlur={() => setErrors({ ...errors, email: null })}
            label="Email"
            name="email"
            errorMessage={errors?.email && errors.email}
          />
          <FieldInput
            toggle
            label="Password"
            name="password"
            type="password"
            value={password || ''}
            onBlur={() => setErrors({ ...errors, password: null })}
            onChange={(e) => setPassword(e.target.value)}
            errorMessage={errors?.password && errors.password}
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
          <Button
            disable={!username || !password || !email ? true : false}
            primary
            fullWidth
            type="submit"
          >
            Register
          </Button>
          <p className={cx('span-bottom')}>
            By registering I confirm I have read and agree to Terms of Use. We send occasional
            marketing messages which can be switched off in account settings. We manage personal
            data as set out in our Privacy Notice.
          </p>
        </form>
        <div className={cx('register')}>
          <span>Already have an account? </span>
          <Link to="/login">Login</Link>
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

export default Register;
