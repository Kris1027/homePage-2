import { useEffect, useReducer, useState } from 'react';
import NavPage from '../components/NavPage';
import styles from './ToDoList.module.css';

function taskReducer(state, action) {
  let newTask;

  switch (action.type) {
    case 'ADD_TASK':
      newTask = {
        id:
          state.reduce(
            (maxId, task) => (task.id > maxId ? task.id : maxId),
            0
          ) + 1,
        task: action.payload,
        isCompleted: false,
      };
      return [...state, newTask];

    case 'TOGGLE_TASK':
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, isCompleted: !task.isCompleted }
          : task
      );

    case 'REMOVE_TASK':
      return state.filter((task) => task.id !== action.payload);

    case 'RESET_TASKS':
      return [];
  }
}

function ToDoList() {
  const [task, setTask] = useState('');
  const [taskData, dispatch] = useReducer(taskReducer, [], initialData);

  function initialData() {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    return savedTasks;
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskData));
  }, [taskData]);

  function handleAddTask(e) {
    e.preventDefault();
    dispatch({ type: 'ADD_TASK', payload: task });
    setTask('');
  }

  function handleToggleTaskCompleted(id) {
    dispatch({ type: 'TOGGLE_TASK', payload: id });
  }

  function handleRemoveTask(id) {
    dispatch({ type: 'REMOVE_TASK', payload: id });
  }

  function handleResetBtn() {
    dispatch({ type: 'RESET_TASKS' });
  }

  const amountOfTasks = taskData.length;

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
                onClick={() => handleToggleTaskCompleted(task.id)}
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
