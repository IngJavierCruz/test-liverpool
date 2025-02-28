import * as styles from "./styles.module.css";

export default function Toast({ message}) {
  return  <div className={styles.toast}>✅ {message}</div>;
}