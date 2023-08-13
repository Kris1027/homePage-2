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
      </ul>
    </nav>
  );
}

export default NavPage;
