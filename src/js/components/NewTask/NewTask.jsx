import PropTypes from "prop-types";
import { useState } from "react";

import Input from "../Input/Input";
import CreateButton from "../CreateButton/CreateButton";

import styles from "./styles.module.scss";
import taskStore from "src/js/store/task.js";

export default function NewTask({ className }) {
  const [title, setTitle] = useState("");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleClick = () => {
    if (title) {
      taskStore.addTask(title);
      setTitle("");
    } else {
      alert("Please enter a new task");
    }
  };

  return (
    <div className={`${styles.newTask} ${className}`}>
      <Input
        value={title}
        handleChange={handleChange}
        placeholder="Add a new task"
      />
      <CreateButton handleClick={handleClick} />
    </div>
  );
}

NewTask.propTypes = {
  className: PropTypes.string,
};

NewTask.defaultProps = {
  className: "",
};
