import React from 'react';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';

import download from '~/assets/images/download.png';

const cx = classNames.bind(styles);

const Home = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('content')}>
          <h2 className={cx('heading')}>Download Shop Coin USA App</h2>
          <p className={cx('caption')}>Manage crypto assets at your fingertips</p>
          <a
            className={cx('btn')}
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys"
            target="_blank"
            rel="noreferrer"
          >
            <img src={download} alt="" />
          </a>
          <p className={cx('text-button')}>For Android</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
