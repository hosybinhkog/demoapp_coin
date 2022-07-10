import React from 'react';
import Styles from './Loading.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(Styles);

const Loading = () => {
  return (
    <div className={cx('loading')}>
      <div>Loading...</div>
    </div>
  );
};

export default Loading;
