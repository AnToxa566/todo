import PropTypes from "prop-types";
import Checkbox from "../Checkbox/Checkbox";
import DeleteButton from "../DeleteButton/DeleteButton";
import styles from "./styles.module.scss";
import { useState } from "react";

export default function Task({ text, done }) {
  const [isDone, setIsDone] = useState(done);

  const updateData = (value) => {
    setIsDone(value);
  };

  return (
    <div className={`${styles.task} ${isDone ? styles.task_done : ""}`}>
      <div className={styles.task__left}>
        <Checkbox
          className={styles.task__check}
          checked={isDone}
          updateData={updateData}
        />
        <p className={styles.task__text}>{text}</p>
      </div>

      <DeleteButton className={styles.task__deleteBtn} />
    </div>
  );
}

Task.propTypes = {
  text: PropTypes.string.isRequired,
  done: PropTypes.bool,
};

Task.defaultProps = {
  done: false,
};
