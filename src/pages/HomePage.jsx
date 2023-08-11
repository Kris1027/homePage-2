import styles from './Homepage.module.css';

// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fas } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { webpages } from '../../data/websites';
import NavPage from '../components/NavPage';
// library.add(fas);

function Homepage() {
  return (
    <>
      <NavPage />
      <div className={styles.websitesContainer}>
        {webpages.map((webpage) => (
          <a
            href={webpage.link}
            target='_blank'
            rel='noopener noreferrer'
            className={styles.webpage}
            key={webpage.name}
          >
            {webpage.name}
          </a>
        ))}
        {/* <FontAwesomeIcon icon='fa-calculator' className={styles.icon} /> */}
      </div>
    </>
  );
}

export default Homepage;
