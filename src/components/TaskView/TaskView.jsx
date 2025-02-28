import { useEffect, useRef, useState } from "react";
import { useForm } from "../../hooks/useForm";
import TaskForm from "../TaskForm/TaskForm";
import Tasks from "../Tasks/Tasks";
import * as styles from "./styles.module.css";
import Spinner from "../Spinner/Spinner";

const STATE_INITIAL = [{
  id: new Date().getTime(),
  description: "Hola mundo",
  completed: false
}];

export default function TaskView() {
  const [values, handleInputChange, reset] = useForm({task: ""});
  const [loadingTask, setLoadingTask] = useState(true);
  const [tasks, setTasks] = useState([]);
  const inputRef = useRef(null);

  const resetTest = (event) => {
    event.preventDefault();
    reset({task: ""});
    setTasks([]);
    inputRef.current.focus();
  }

  const addTask = (event) => {
    event.preventDefault();
    setLoadingTask(true);
    // SIMULATION API
    setTimeout(() => {
      setTasks(x => [{id: new Date().getTime(), description: values.task, completed: false}, ...x])
      reset({task: ""});
      inputRef.current.focus();
      setLoadingTask(false);
    }, 300);
  };

  const toggleTask = (task) => {
    setLoadingTask(true);
    setTimeout(() => {
      const newTasks = tasks.map(x => x.id === task.id ? {...x, completed: !x.completed} : x);
      setTasks(newTasks);
      setLoadingTask(false);
    }, 300);
  }

  useEffect(() => {
    // SIMULATION API
    setTimeout(() => {
      setTasks(STATE_INITIAL);
      setLoadingTask(false);
    }, 1000);
  }, [])

  return (
    <div className={styles.container}>
      { loadingTask && <Spinner hide={!loadingTask} />}
      <div className={styles.tasks}>
        <TaskForm
          values={values}
          addTask={addTask}
          handleInputChange={handleInputChange}
          reset={resetTest}
          inputRef={inputRef}
        />

        <div className={styles.divider}></div>

        <Tasks tasks={tasks} toggleTask={toggleTask} />
      </div>
    </div>
  );
}
