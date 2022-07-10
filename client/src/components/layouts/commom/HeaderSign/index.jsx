import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './HeaderSign.module.scss';

import logo from '~/assets/images/logo.png';

const cx = classNames.bind(styles);

const HeaderSignUp = () => {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('logo')}>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
    </header>
  );
};

export default HeaderSignUp;
