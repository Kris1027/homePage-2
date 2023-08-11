import { Link } from 'react-router-dom';

import styles from './NavPage.module.css';

function NavPage() {
  return (
    <div className={styles.navContainer}>
      <Link to='/'>Home</Link>
      <Link to='todolist'>ToDoList</Link>
    </div>
  );
}

export default NavPage;
