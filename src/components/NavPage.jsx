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
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/todolist'>
            <FontAwesomeIcon icon='fa-list-alt' />
            ToDoList
          </NavLink>
        </li>
        <li>
          <NavLink to='/notepad'>
            <FontAwesomeIcon icon='fa-sticky-note' />
            NotePad
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavPage;
