import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Footer.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <footer className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('footer-header')}>
          <div className={cx('item')}>
            <h5 className={cx('heading')}>Products</h5>
            <ul>
              <li>
                <Link to={'/'}>Blockchain Explorer</Link>
              </li>
              <li>
                <Link to={'/'}>Crypto API</Link>
              </li>
              <li>
                <Link to={'/'}>Crypto Indices</Link>
              </li>
              <li>
                <Link to={'/'}>Interest</Link>
              </li>
              <li>
                <Link to={'/'}>Jobs Board</Link>
              </li>
              <li>
                <Link to={'/'}>Sitemap</Link>
              </li>
            </ul>
          </div>
          <div className={cx('item')}>
            <h5 className={cx('heading')}>Company</h5>
            <ul>
              <li>
                <Link to={'/'}>About us</Link>
              </li>
              <li>
                <Link to={'/'}>Terms of use</Link>
              </li>
              <li>
                <Link to={'/'}>Privacy Policy</Link>
              </li>
              <li>
                <Link to={'/'}>Disclaimer</Link>
              </li>
              <li>
                <Link to={'/'}>Methodology</Link>
              </li>
              <li>
                <Link to={'/'}>CareersWe’re hiring!</Link>
              </li>
            </ul>
          </div>
          <div className={cx('item')}>
            <h5 className={cx('heading')}>Support</h5>
            <ul>
              <li>
                <Link to={'/'}>Request Form</Link>
              </li>
              <li>
                <Link to={'/'}>Contact Support</Link>
              </li>
              <li>
                <Link to={'/'}>FAQ</Link>
              </li>
              <li>
                <Link to={'/'}>Glossary</Link>
              </li>
            </ul>
          </div>
          <div className={cx('item')}>
            <h5 className={cx('heading')}>Socials</h5>
            <ul>
              <li>
                <Link to={'/'}>Facebook</Link>
              </li>
              <li>
                <Link to={'/'}>Twitters</Link>
              </li>
              <li>
                <Link to={'/'}>Telegram</Link>
              </li>
              <li>
                <Link to={'/'}>Instagram</Link>
              </li>
              <li>
                <Link to={'/'}>Interactive Chat</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={cx('footer-bottom')}>
          <h5>
            Copyright © 2022 <Link to="/">Shopcoin.com</Link>
          </h5>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
