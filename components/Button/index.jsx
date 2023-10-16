import React from 'react';
import styles from './index.module.scss';
import cl from 'classnames';

const Button = ({ className, children, onClick, disabled }) => {
  return (
    <div
      className={cl(className, styles.button)}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Button;
