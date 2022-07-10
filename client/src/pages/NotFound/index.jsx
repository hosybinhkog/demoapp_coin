import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './NotFound.module.scss';

const cx = classNames.bind(styles);

const NotFound = () => {
  return (
    <div className={cx('wrapper')}>
      <h2 className={cx('text-404')}>404</h2>
      <div>Sorry Opps, Page not found</div>
      <div>
        <span>
          Home page : <Link to="/">Click!</Link>
        </span>
      </div>
    </div>
  );
};

export default NotFound;
