import NavPage from '../components/NavPage';
import styles from './ToDoList.module.css';

const lists = [
  {
    task: 'kupić marchewkę',
    isCompleted: true,
  },
  {
    task: 'ogolić wąsa',
    isCompleted: false,
  },
];

function ToDoList() {
  return (
    <>
      <NavPage />
      <div className={styles.toDo}>
        <form className={styles.addTask}>
          <input type='text' placeholder='add new task' />
          <button>+</button>
        </form>
        <ul>
          {lists.map((task) => (
            <li className={styles.task} key={task.task}>
              {task.task}
              {task.isCompleted ? (
                <span className={styles.trashBtn}>🗑️</span>
              ) : (
                ''
              )}
            </li>
          ))}
        </ul>
        <p>
          You have X pending tasks
          <button className={styles.clearBtn}>Clear All</button>
        </p>
      </div>
    </>
  );
}

export default ToDoList;
