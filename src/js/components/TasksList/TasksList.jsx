import PropTypes from "prop-types";
import clsx from "clsx";
import styles from "./styles.module.scss";
import Task from "../Task/Task";

export default function TasksList({ tasks, className }) {
  return (
    <div className={clsx([styles["tasks-list"], className])}>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}

TasksList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  className: PropTypes.string,
};

TasksList.defaultProps = {
  className: "",
};
