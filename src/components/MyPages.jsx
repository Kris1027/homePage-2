import styles from './MyPages.module.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(fas);

function MyPages() {
  return (
    <div className={styles.pages}>
      <ul>
        <li>
          <a
            href='https://kris1027.github.io/Frela---The-Game/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon icon='fa-gamepad' />
            <span>Frela - The Game</span>
          </a>
        </li>
        <li>
          <a
            href='https://delicate-tiramisu-04ae2c.netlify.app/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon icon='fa-graduation-cap' />
            <span>myEnglishTeacher</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default MyPages;
