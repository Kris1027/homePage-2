import styles from './Homepage.module.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { webpages } from '../../data/websites';

library.add(fas);

function Homepage() {
  return (
    <div className={styles.websitesContainer}>
      {webpages.map((webpage) => (
        <div className={styles.webpage} key={webpage.name}>
          {webpage.name}
        </div>
      ))}
      <FontAwesomeIcon icon='fa-calculator' className={styles.icon} />
    </div>
  );
}

export default Homepage;
