import styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard } from "@fortawesome/free-regular-svg-icons";

export default function TasksEmpty() {
  return (
    <div className={styles["tasks-empty"]}>
      <FontAwesomeIcon
        className={styles["tasks-empty__icon"]}
        icon={faClipboard}
      />

      <div className={styles["tasks-empty__text"]}>
        <span className={styles["tasks-empty__text--bold"]}>
          You don&apos;t have tasks registered yet
        </span>
        <span>Create tasks and organize your to-do items</span>
      </div>
    </div>
  );
}
