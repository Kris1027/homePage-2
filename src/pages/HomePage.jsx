import styles from './Homepage.module.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(fas);

import { webpages } from '../../data/websites';
import NavPage from '../components/NavPage';
import MyPages from '../components/MyPages';

function Homepage() {
  return (
    <>
      <NavPage />
      <div className={styles.websites}>
        {webpages.map((webpage) => (
          <a
            href={webpage.link}
            target='_blank'
            rel='noopener noreferrer'
            key={webpage.name}
          >
            <FontAwesomeIcon icon={webpage.icon} className={styles.icon} />
            <span>{webpage.name}</span>
          </a>
        ))}
      </div>
      <MyPages />
    </>
  );
}

export default Homepage;
