import styles from './Homepage.module.css';

// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fas } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// library.add(fas);

import { webpages } from '../../data/websites';
import NavPage from '../components/NavPage';

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
            {webpage.name}
          </a>
        ))}
        {/* <FontAwesomeIcon icon='fa-calculator' className={styles.icon} /> */}
      </div>
    </>
  );
}

export default Homepage;
