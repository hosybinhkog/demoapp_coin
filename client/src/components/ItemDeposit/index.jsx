import React from 'react';
import styles from './ItemDeposit.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const ItemDeposit = ({ title, description, imgList, center = true, left }) => {
  const classNamesTitle = cx('heading', `${left ? 'left' : 'center'}`);

  return (
    <div className={cx('wrapper')}>
      <div className={classNamesTitle}>
        <span className={cx('title')}>{title}</span>
      </div>
      <p className={cx('description')}>{description}</p>
      <div className={cx('list-img')}>
        {imgList.length > 0 &&
          imgList.map((item, index) => (
            <img className={cx('img')} src={item.src} alt={item.alt} key={index} />
          ))}
      </div>
    </div>
  );
};

export default ItemDeposit;
