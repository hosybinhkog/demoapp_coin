import React, { useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './DropDown.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

const classes = cx('active');

const clickOutsideRef = (content_ref, toggle_ref) => {
  document.addEventListener('mousedown', (e) => {
    // user click toggle
    if (toggle_ref.current && toggle_ref.current.contains(e.target)) {
      content_ref.current.classList.toggle(classes);
    } else {
      // user click outside toggle and content
      if (content_ref.current && !content_ref.current.contains(e.target)) {
        content_ref.current.classList.remove(classes);
      }
    }
  });
};

const DropDown = (props) => {
  const dropdown_toggle_ref = useRef(null);
  const dropdown_content_el = useRef(null);

  clickOutsideRef(dropdown_content_el, dropdown_toggle_ref);

  return (
    <div className={cx('dropdown')}>
      <button ref={dropdown_toggle_ref} className={cx('dropdown__toggle')}>
        {props.icon ? <FontAwesomeIcon icon={props.icon} /> : ''}
        {props.badge ? <span className={cx('dropdown__toggle-badge')}>{props.badge}</span> : ''}
        {props.customToggle ? props.customToggle() : ''}
      </button>
      <div ref={dropdown_content_el} className={cx('dropdown__content')}>
        {props.contentData && props.renderItems
          ? props.contentData.map((item, index) => props.renderItems(item, index))
          : ''}
        {props.renderFooter ? (
          <div className={cx('dropdown__footer')}>{props.renderFooter()}</div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default DropDown;
