import React from 'react';
import classNames from 'classnames/bind';
import styles from './Deposit.module.scss';

import { ItemDeposit } from '~/components';

import img1 from '~/assets/images/img1.png';
import { depositData } from '~/assets/data/data';

const cx = classNames.bind(styles);

const Deposit = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <img src={img1} alt="Hình Ảnh" className={cx('img-header')} />
        {depositData &&
          depositData.map((item, index) => (
            <ItemDeposit
              key={index}
              title={item.title}
              description={item.description}
              imgList={item.imgList}
              left={item.left}
              center={item.right}
            />
          ))}
      </div>
    </div>
  );
};

export default Deposit;
