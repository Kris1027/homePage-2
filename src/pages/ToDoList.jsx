import { useState } from 'react';
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
  const [task, setTask] = useState('');
  const [taskData, setTaskData] = useState(lists);

  function handleAddTask(e) {
    e.preventDefault();
    const newTask = {
      task: task,
      isCompleted: false,
    };

    setTaskData((prevData) => [...prevData, newTask]);
    setTask('');
  }

  function handleChangeStatus(task) {
    setTaskData((prevData) => prevData.filter((id) => id.task !== task));
  }

  return (
    <>
      <NavPage />
      <div className={styles.toDo}>
        <form onSubmit={handleAddTask} className={styles.addTask}>
          <input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            type='text'
            placeholder='add new task'
          />
          <button type='submit'>+</button>
        </form>
        <ul>
          {taskData.map((task) => (
            <li className={styles.task} key={task.task}>
              <span
                style={{
                  textDecoration: task.isCompleted ? 'line-through' : '',
                }}
              >
                {task.task}
              </span>
              {task.isCompleted ? (
                <span
                  onClick={() => handleChangeStatus(task.task)}
                  className={styles.trashBtn}
                >
                  ❌
                </span>
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
