import * as styles from "./styles.module.css";

export default function Task({ data, toggleTask }) {
  const statusClass = data.completed ? styles.task__completed : "";

  return (
    <div className={`${styles.card} ${statusClass}`} onClick={() => toggleTask(data)}>
      {data.description}
    </div>
  )
}