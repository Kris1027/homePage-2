import { NavLink } from 'react-router-dom';

import styles from './NavPage.module.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(fas);

function NavPage() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to='/'>
            <FontAwesomeIcon icon='fa-home' />
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='/todolist'>
            <FontAwesomeIcon icon='fa-list-alt' />
            <span>ToDoList</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='/notepad'>
            <FontAwesomeIcon icon='fa-sticky-note' />
            <span>NotePad</span>
          </NavLink>
        </li>
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
    </nav>
  );
}

export default NavPage;
