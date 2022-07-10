import classNames from 'classnames/bind';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

import logo from '~/assets/images/logo.png';
import { Button, Loading } from '~/components';

import imgUser from '~/assets/images/imgUser.png';

const cx = classNames.bind(styles);

const Header = () => {
  const classActive = cx('activeLink', 'link');

  const headerRef = useRef(null);

  const { user, isAuthenticated, loading } = useSelector((state) => state.user);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (document.documentElement.scrollTop > 120 || window.scrollY > 120) {
        headerRef.current && headerRef.current.classList.add('fixed');
      } else {
        headerRef.current && headerRef.current.classList.remove('fixed');
      }
    });

    return () => window.removeEventListener('scroll', () => {});
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <header className={cx('wrapper')} ref={headerRef}>
          <div className={cx('container')}>
            <div className={cx('logo')}>
              <img src={logo} alt="" />
            </div>
            <ul className={cx('menu')}>
              <li>
                <NavLink to={'/'}>
                  {({ isActive }) => (
                    <span className={isActive ? classActive : cx('link')}>HOME</span>
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink to={'/deposit'}>
                  {({ isActive }) => (
                    <span className={isActive ? classActive : cx('link')}>DEPOSIT-WITHDRAW</span>
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink to={'/blog'}>
                  {({ isActive }) => (
                    <span className={isActive ? classActive : cx('link')}>BLOG</span>
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink to={'/aboutus'}>
                  {({ isActive }) => (
                    <span className={isActive ? classActive : cx('link')}>About us</span>
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink to={'/contactus'}>
                  {({ isActive }) => (
                    <span className={isActive ? classActive : cx('link')}>Contact us</span>
                  )}
                </NavLink>
              </li>
            </ul>
            {isAuthenticated ? (
              <>
                <div className={cx('account')}>
                  <img src={user.images ? user.images[0].src : imgUser} alt="avatar" />
                  <span>{user.username}</span>
                </div>
              </>
            ) : (
              <div className={cx('action-btn')}>
                <Button small rounded primary to="/login">
                  Login
                </Button>
              </div>
            )}
          </div>
        </header>
      )}
    </>
  );
};

export default Header;
