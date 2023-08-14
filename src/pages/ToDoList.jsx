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
      <div className={styles.toDoWrapper}>
        <h1>ToDo App</h1>
        <form>
          <input type='text' />
          <button>+</button>
        </form>
        <div className='tasks'>
          {lists.map((task) => (
            <div key={task.task}>{task.task}</div>
          ))}
        </div>
        <p>You have X pending tasks</p>
        <button>Clear All</button>
      </div>
    </>
  );
}

export default ToDoList;
