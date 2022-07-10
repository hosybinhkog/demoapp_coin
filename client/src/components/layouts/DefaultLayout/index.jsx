import React, { useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

import Header from '../commom/Header';
import Footer from '../commom/Footer';

const cx = classNames.bind(styles);

const DefaultLayout = ({ children, title }) => {
  document.title = `Coin - ${title ? title : 'BST'}`;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
        <div className={cx('content')}>{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
