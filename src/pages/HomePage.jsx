import styles from './Homepage.module.css';

// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fas } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { webpages } from '../../data/websites';
import NavPage from '../components/NavPage';
import { Outlet } from 'react-router-dom';
// library.add(fas);

function Homepage() {
  return (
    <>
      <NavPage />
      <Outlet />
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
