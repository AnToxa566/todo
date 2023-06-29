import PropTypes from "prop-types";
import clsx from "clsx";
import styles from "./styles.module.scss";
import TasksInfo from "../TasksInfo/TasksInfo";
import TasksList from "../TasksList/TasksList";
import TasksEmpty from "../TasksEmpty/TasksEmpty";

export default function Tasks({ className }) {
  const tasks = [
    // {
    //   id: 1,
    //   text: "Lorem ipsum dolor sit amet, consectetur adip dolor sit amet dolor sit amet dolor sit amet dolor sit amet",
    //   isDone: false,
    // },
    // {
    //   id: 2,
    //   text: "Lorem ipsum dolor sit amet, consectetur adip dolor sit amet dolor sit amet dolor sit amet dolor sit amet",
    //   isDone: false,
    // },
    // {
    //   id: 3,
    //   text: "Lorem ipsum dolor sit amet, consectetur adip dolor sit amet dolor sit amet dolor sit amet dolor sit amet",
    //   isDone: true,
    // },
    // {
    //   id: 4,
    //   text: "Lorem ipsum dolor sit amet, consectetur adip dolor sit amet dolor sit amet dolor sit amet dolor sit amet",
    //   isDone: false,
    // },
    // {
    //   id: 5,
    //   text: "Lorem ipsum dolor sit amet, consectetur adip dolor sit amet dolor sit amet dolor sit amet dolor sit amet",
    //   isDone: true,
    // },
  ];

  return (
    <div className={clsx([styles.tasks, className])}>
      <TasksInfo />
      {tasks.length ? <TasksList tasks={tasks} /> : <TasksEmpty />}
    </div>
  );
}

Tasks.propTypes = {
  className: PropTypes.string,
};

Tasks.defaultProps = {
  className: "",
};
