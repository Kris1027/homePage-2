import { NavLink } from 'react-router-dom';

import styles from './NavPage.module.css';

function NavPage() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/todolist'>ToDoList</NavLink>
        </li>
        <li>
          <NavLink to='/notepad'>NotePad</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavPage;
