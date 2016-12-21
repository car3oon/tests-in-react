import React from 'react';

const Button = ({ children, onClick }) => (
  <button
    className="button"
    onClick={onClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func,
};

export default Button;
