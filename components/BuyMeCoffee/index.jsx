import React from 'react';
import styles from './index.module.scss';
import cl from 'classnames';
import ScreenEgg from '../ScreenEgg';

const BuyMeCoffee = ({ className }) => {
  return (
    <ScreenEgg type="right">
      <div className={cl(className, styles.buyCoffee)}>
        <a
          href="https://yookassa.ru/kak-podklyuchit-platezhnuyu-sistemu-k-saytu/"
          target="_black"
          className={styles.buyCoffeeButton}
          rel="noreferrer"
        >
          Go money
        </a>
      </div>
    </ScreenEgg>
  );
};

export default BuyMeCoffee;
