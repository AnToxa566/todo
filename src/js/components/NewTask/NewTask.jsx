import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import Input from "../Input/Input";
import CreateButton from "../CreateButton/CreateButton";

export default function NewTask({ className }) {
  return (
    <div className={`${styles.newTask} ${className}`}>
      <Input placeholder="Add a new task" />
      <CreateButton />
    </div>
  );
}

NewTask.propTypes = {
  className: PropTypes.string,
};
