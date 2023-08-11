import styles from './Homepage.module.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fas);

function Homepage() {
  return (
    <div className={styles.websitesContainer}>
      <FontAwesomeIcon icon='coffee' />
    </div>
  );
}

export default Homepage;
