import PropTypes from "prop-types";
import clsx from "clsx";
import { observer } from "mobx-react-lite";

import Counter from "../Counter/Counter";

import styles from "./styles.module.scss";
import taskStore from "src/js/store/task.js";

const TasksInfo = observer(({ className }) => {
  return (
    <div className={clsx([styles["tasks-info"], className])}>
      <div className={styles["tasks-info__created"]}>
        <span className={styles["tasks-info__created-title"]}>
          Created tasks
        </span>
        <Counter value={taskStore.count} />
      </div>

      <div className={styles["tasks-info__completed"]}>
        <span className={styles["tasks-info__completed-title"]}>Completed</span>
        <Counter value={taskStore.completedCount} />
      </div>
    </div>
  );
});

TasksInfo.propTypes = {
  className: PropTypes.string,
};

TasksInfo.defaultProps = {
  className: "",
};

export default TasksInfo;
