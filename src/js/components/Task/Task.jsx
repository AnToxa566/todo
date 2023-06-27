import PropTypes from "prop-types";
import Checkbox from "../Checkbox/Checkbox";
import DeleteButton from "../DeleteButton/DeleteButton";
import style from "./task.module.scss";
import { useState } from "react";

export default function Task({ text, done }) {
  const [isDone, setIsDone] = useState(done || false);

  const updateData = (value) => {
    setIsDone(value);
  };

  return (
    <div className={`${style.task} ${isDone ? style.task_done : ""}`}>
      <div className={style.task__left}>
        <Checkbox
          className={style.task__check}
          checked={isDone}
          updateData={updateData}
        />
        <p className={style.task__text}>{text}</p>
      </div>

      <DeleteButton className={style.task__deleteBtn} />
    </div>
  );
}

Task.propTypes = {
  text: [PropTypes.string, PropTypes.element.isRequired],
  done: PropTypes.bool,
};
