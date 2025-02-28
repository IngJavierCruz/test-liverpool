import Task from "../Task/Task";
import * as styles from "./styles.module.css";


export default function Tasks({ tasks, toggleTask }) {


  if (tasks.length === 0) {
    return <div className={styles.message}>No hay tareas</div>
  }

  return (
    <div className={styles.wrapper_tasks}>
      {
        tasks.map(x => <Task key={x.id} data={x} toggleTask={toggleTask} />)
      }
    </div>
  )
}