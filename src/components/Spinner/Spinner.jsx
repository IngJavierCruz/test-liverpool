import * as styles from "./styles.module.css";

export default function Spinner({ hide = false, description = "Cargando" }) {
  if (hide) return null;

  return (
    <div className={styles.container}>
      <div className={styles.loading_spinner} />
      <div className={styles.label}>
        {description}
      </div>
    </div>
  );
}
