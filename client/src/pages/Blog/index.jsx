import React from 'react';
import classNames from 'classnames/bind';

import styles from './Blog.module.scss';

const cx = classNames.bind(styles);

const Blog = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <h3>Hiện tại website chưa có bài blog!</h3>
      </div>
    </div>
  );
};

export default Blog;
