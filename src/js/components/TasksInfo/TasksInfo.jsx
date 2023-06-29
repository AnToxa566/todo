import PropTypes from "prop-types";
import clsx from "clsx";
import styles from "./styles.module.scss";
import Counter from "../Counter/Counter";

export default function TasksInfo({ className }) {
  return (
    <div className={clsx([styles["tasks-info"], className])}>
      <div className={styles["tasks-info__created"]}>
        <span className={styles["tasks-info__created-title"]}>
          Created tasks
        </span>
        <Counter />
      </div>

      <div className={styles["tasks-info__completed"]}>
        <span className={styles["tasks-info__completed-title"]}>Completed</span>
        <Counter />
      </div>
    </div>
  );
}

TasksInfo.propTypes = {
  className: PropTypes.string,
};

TasksInfo.defaultProps = {
  className: "",
};
