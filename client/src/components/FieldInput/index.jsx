import React, { useState, useRef, useEffect } from 'react';
import styles from './FieldInput.module.scss';
import classNames from 'classnames/bind';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const FieldInput = ({
  as = 'input',
  value,
  label,
  name,
  type = 'text',
  placeholder,
  onChange,
  small,
  large,
  medium,
  cols,
  rounded,
  minHeight,
  errorMessage,
  disabled,
  multiple,
  onBlur,
  rows,
  toggle,
  data,
  ...props
}) => {
  const btnRef = useRef();
  const [toggleBtn, setToggleBtn] = useState(false);

  useEffect(() => {
    btnRef.current &&
      btnRef.current.addEventListener('click', () => {
        setToggleBtn(!toggleBtn);
      });
  }, [toggleBtn]);

  const classNames = cx('wrapper', {
    small,
    large,
    medium,
    minHeight,
    rounded,
  });

  if (as === 'select') {
    return (
      <div className={classNames}>
        <label className={cx('label')}>{label}</label>
        <select value={value} onChange={onChange} className={cx('select')}>
          <option>Vui lòng chọn</option>
          {data.length > 0 &&
            data.map((item, index) => (
              <option key={index} value={item._id}>
                {item.title}
              </option>
            ))}
        </select>
        {errorMessage && typeof errorMessage === 'string' ? (
          <div className={cx('error-message')}>
            <span>{errorMessage}</span>
          </div>
        ) : (
          errorMessage?.length > 0 &&
          errorMessage.map((item, index) => (
            <div key={index} className={cx('error-message')}>
              <span>{item}</span>
            </div>
          ))
        )}
      </div>
    );
  }

  if (as === 'textarea') {
    return (
      <div className={classNames}>
        <label htmlFor={name} className={cx('label')}>
          {label}
        </label>
        <textarea
          className={cx('textarea')}
          onChange={onChange}
          placeholder={placeholder}
          name={name}
          cols={cols}
          rows={rows}
          value={value}
          disabled={disabled}
          id={name}
        />
        {errorMessage && typeof errorMessage === 'string' ? (
          <div className={cx('error-message')}>
            <span>{errorMessage}</span>
          </div>
        ) : (
          errorMessage?.length > 0 &&
          errorMessage.map((item, index) => (
            <div key={index} className={cx('error-message')}>
              <span>{item}</span>
            </div>
          ))
        )}
      </div>
    );
  }

  return (
    <div className={classNames}>
      <label htmlFor={name} className={cx('label')}>
        {label}
      </label>
      <input
        onBlur={onBlur}
        onChange={onChange}
        placeholder={placeholder}
        type={toggleBtn ? 'text' : type}
        name={name}
        id={name}
        value={value}
        className={cx('input')}
        multiple={multiple}
        disabled={disabled}
        {...props}
      />
      {toggle ? (
        <div className={cx('show')} ref={btnRef}>
          <FontAwesomeIcon icon={toggleBtn ? faEye : faEyeSlash} />
        </div>
      ) : (
        ''
      )}
      {errorMessage && typeof errorMessage === 'string' ? (
        <div className={cx('error-message')}>
          <span>{errorMessage}</span>
        </div>
      ) : (
        errorMessage?.length > 0 &&
        errorMessage.map((item, index) => (
          <div key={index} className={cx('error-message')}>
            <span>{item}</span>
          </div>
        ))
      )}
    </div>
  );
};

export default FieldInput;
