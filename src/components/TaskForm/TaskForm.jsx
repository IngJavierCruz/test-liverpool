import * as styles from "./styles.module.css";

export default function TaskForm({ values, addTask, handleInputChange, reset, inputRef }) {

  return (
    <form className={styles.container}>
      <input type="text"
        ref={inputRef}
        value={values.task}
        name="task"
        placeholder="Ingesa una nueva tarea"
        className={styles.input}
        onChange={handleInputChange}
      />

      <button
        className={`${styles.btn} ${styles.btn_primary}`}
        onClick={addTask}>
        Agregar
      </button>

      <button
        className={`${styles.btn} ${styles.btn_secondary}`}
        onClick={reset}>
        Resetear test
      </button>
    </form>
  )
}