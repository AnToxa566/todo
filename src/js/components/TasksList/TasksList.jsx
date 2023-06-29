import PropTypes from "prop-types";
import clsx from "clsx";
import styles from "./styles.module.scss";
import Task from "../Task/Task";

export default function TasksList({ tasks, className }) {
  return (
    <div className={clsx([styles["tasks-list"], className])}>
      {tasks.map((task) => (
        <Task key={task.id} text={task.text} done={task.isDone} />
      ))}
    </div>
  );
}

TasksList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      isDone: PropTypes.bool.isRequired,
    })
  ).isRequired,
  className: PropTypes.string,
};

TasksList.defaultProps = {
  className: "",
};
