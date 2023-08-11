import NavPage from '../components/NavPage';
import styles from './ToDoList.module.css';

function ToDoList() {
  return (
    <>
      <NavPage />
      <div className={styles.toDoList}>
        <h1>Here I will build cool ToDoList</h1>
      </div>
    </>
  );
}

export default ToDoList;
