import React, { useEffect } from 'react';
import styles from './LayoutSignUp.module.scss';
import classNames from 'classnames/bind';
import HeaderSignUp from '../commom/HeaderSign';
import FooterSign from '../commom/FooterSign';

const cx = classNames.bind(styles);

const LayoutSignUp = ({ children, title }) => {
  document.title = `Coin - ${title ? title : 'BST'}`;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={cx('wrapper')}>
      <HeaderSignUp />
      <div className={cx('container')}>
        <div className={cx('content')}>{children}</div>
      </div>
      <FooterSign />
    </div>
  );
};

export default LayoutSignUp;
