import PropTypes from "prop-types";
import clsx from "clsx";
import { observer } from "mobx-react-lite";

import TasksInfo from "../TasksInfo/TasksInfo";
import TasksList from "../TasksList/TasksList";
import TasksEmpty from "../TasksEmpty/TasksEmpty";

import styles from "./styles.module.scss";
import taskStore from "src/js/store/task.js";

const Tasks = observer(({ className }) => {
  const tasks = taskStore.tasks;

  return (
    <div className={clsx([styles.tasks, className])}>
      <TasksInfo />
      {tasks.length ? <TasksList tasks={tasks} /> : <TasksEmpty />}
    </div>
  );
});

Tasks.propTypes = {
  className: PropTypes.string,
};

Tasks.defaultProps = {
  className: "",
};

export default Tasks;
