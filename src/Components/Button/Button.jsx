import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ btnClass, size, border, label, ...props }) => {

  const borderClass = border ? 'border': '';
  return (
    <button
      type="button"
      className={['btn', `storybook-button--${size}`, btnClass, borderClass].join(' ')}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  btnClass: PropTypes.oneOf(['btn-primary', 'btn-danger', 'btn-light']),
  /**
   * Is border required or not
   */
  border: PropTypes.bool,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  btnClass: 'btn-primary',
  size: 'medium',
  border: true,
  onClick: undefined,
};
