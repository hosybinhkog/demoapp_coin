import classNames from 'classnames/bind';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate, Link } from 'react-router-dom';
import styles from './Header.module.scss';

import { logout } from '~/redux/actions/user.action.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faRightFromBracket, faUser, faWallet } from '@fortawesome/free-solid-svg-icons';
import imgUser from '~/assets/images/imgUser.png';
import logo from '~/assets/images/logo.png';
import { Button, Loading, DropDown } from '~/components';

const cx = classNames.bind(styles);

const renderUserMenu = (item, index) => {
  return (
    <Link to={`/`} key={index}>
      <div className={cx('notification-item')} onClick={item.onClick}>
        <FontAwesomeIcon icon={item.icon} />
        <span>{item.content}</span>
      </div>
    </Link>
  );
};

const renderUserToggle = (user) => {
  return (
    <div className={cx('topnav__right-user', 'account')}>
      <div className={cx('topnav__right-user__image')}>
        <img src={user.urlAvatar} alt="" />
      </div>
      <span className={cx('topnav__right-user__name')}>{user.name}</span>
    </div>
  );
};

const Header = () => {
  const classActive = cx('activeLink', 'link');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const headerRef = useRef(null);

  const { user, isAuthenticated, loading } = useSelector((state) => state.user);

  const fakeDataUserMenus = [
    {
      icon: faUser,
      content: 'Profile',
    },
    {
      icon: faWallet,
      content: 'My wallet',
    },
    {
      icon: faGear,
      content: 'Setting',
    },
    {
      icon: faRightFromBracket,
      content: 'Logout',
      onClick: () => {
        dispatch(logout());
        navigate('/admin');
      },
    },
  ];

  const fakeUser = {
    name: `${(user && user.username) || `messi`}`,
    urlAvatar: `${user && user.avatar ? user.avatar[0].url : imgUser}`,
  };

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
              <Link to={'/'}>
                <img src={logo} alt="" />
              </Link>
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
                <DropDown
                  customToggle={() => renderUserToggle(fakeUser)}
                  contentData={fakeDataUserMenus}
                  renderItems={(item, index) => renderUserMenu(item, index)}
                />
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
