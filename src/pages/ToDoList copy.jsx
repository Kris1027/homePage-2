import { useState } from 'react';
import NavPage from '../components/NavPage';
import styles from './ToDoList.module.css';

function ToDoList() {
  const [task, setTask] = useState('');
  const [taskData, setTaskData] = useState([]);

  function handleAddTask(e) {
    e.preventDefault();

    const highestId = taskData.reduce(
      (maxId, product) => (product.id > maxId ? product.id : maxId),
      0
    );

    const newTask = {
      id: highestId + 1,
      task: task,
      isCompleted: false,
    };

    setTaskData((prevData) => [...prevData, newTask]);
    setTask('');
  }

  function handleChangeStatus(id) {
    setTaskData((prevData) =>
      prevData.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  }

  function handleRemoveTask(id) {
    setTaskData((prevData) => prevData.filter((task) => task.id !== id));
  }

  const amountOfTasks = taskData.length;

  function handleResetBtn() {
    setTaskData([]);
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
            <li className={styles.task} key={task.id}>
              <span
                onClick={() => handleChangeStatus(task.id)}
                style={{
                  textDecoration: task.isCompleted ? 'line-through' : '',
                }}
              >
                {task.task}
              </span>
              {task.isCompleted && (
                <span
                  onClick={() => handleRemoveTask(task.id)}
                  className={styles.trashBtn}
                >
                  ❌
                </span>
              )}
            </li>
          ))}
        </ul>
        <p>
          You have {amountOfTasks} pending tasks
          <button onClick={handleResetBtn} className={styles.clearBtn}>
            Clear All
          </button>
        </p>
      </div>
    </>
  );
}

export default ToDoList;
