import NavPage from '../components/NavPage';
import styles from './ToDoList.module.css';

function ToDoList() {
  return (
    <>
      <NavPage />
      <div className={styles.toDoList}></div>
    </>
  );
}

export default ToDoList;
