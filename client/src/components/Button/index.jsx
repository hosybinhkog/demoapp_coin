import React from 'react';

import classNames from 'classnames/bind';
import Styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(Styles);

const Button = ({
  iconRight,
  iconLeft,
  to,
  href,
  onClick,
  children,
  primary,
  outline,
  large,
  small,
  text,
  disable,

  rounded,
  className,
  fullWidth,
  ...props
}) => {
  let NameComponent = 'button';
  const _props = { onClick, ...props };

  if (disable) {
    Object.keys(_props).forEach((key) => {
      if (key.startsWith('on') && typeof _props[key] == 'function') {
        delete _props[key];
      }
    });
  }

  if (to) {
    _props.to = to;
    NameComponent = Link;
  } else if (href) {
    _props.href = href;
    NameComponent = 'a';
  }

  const classNamees = cx('wrapper', {
    primary,
    outline,
    small,
    large,
    text,
    disable,
    rounded,
    fullWidth,
    [className]: className,
  });

  return (
    <NameComponent className={classNamees} {..._props}>
      {iconLeft && <span className={cx('icon')}>{iconLeft}</span>}
      <span className={cx('title')}>{children}</span>
      {iconRight && <span className={cx('icon')}>{iconRight}</span>}
    </NameComponent>
  );
};

export default Button;
