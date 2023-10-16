import React from 'react';
import styles from './index.module.scss';
import cl from 'classnames';
import ScreenEgg from '../ScreenEgg';

import {
  AiFillYoutube,
  AiFillGithub,
  AiFillTwitterCircle
} from 'react-icons/ai';

const socialNetworks = [
  {
    id: 1,
    href: 'https://www.youtube.com/',
    icon: AiFillYoutube
  },
  {
    id: 2,
    href: 'https://github.com/',
    icon: AiFillGithub
  },
  {
    id: 3,
    href: 'https://twitter.com/',
    icon: AiFillTwitterCircle
  }
];

const SocialNetworks = ({ className }) => {
  return (
    <ScreenEgg>
      <ul className={cl(className, styles.list)}>
        {socialNetworks.map((socialNetwork) => (
          <li key={socialNetwork.id} className={styles.listItem}>
            <a
              href={socialNetwork.href}
              target="_black"
              className={styles.listLink}
              rel="noreferrer"
            >
              {React.createElement(socialNetwork.icon, {
                color: 'black',
                size: 50
              })}
            </a>
          </li>
        ))}
      </ul>
    </ScreenEgg>
  );
};

export default SocialNetworks;
