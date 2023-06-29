import PropTypes from "prop-types";
import { observer } from "mobx-react-lite";

import Checkbox from "../Checkbox/Checkbox";
import DeleteButton from "../DeleteButton/DeleteButton";

import styles from "./styles.module.scss";
import taskStore from "src/js/store/task.js";

const Task = observer(({ task }) => {
  const updateData = () => {
    taskStore.completeTask(task.id);
  };

  return (
    <div
      className={`${styles.task} ${
        task.completed ? styles.task_completed : ""
      }`}
    >
      <div className={styles.task__left}>
        <Checkbox
          className={styles.task__check}
          checked={task.completed}
          updateData={updateData}
        />
        <p className={styles.task__title}>{task.title}</p>
      </div>

      <DeleteButton className={styles.task__deleteBtn} />
    </div>
  );
});

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Task;
