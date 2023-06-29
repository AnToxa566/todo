import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

export default function CreateButton({ handleClick, text }) {
  return (
    <button onClick={handleClick} className={styles.createButton}>
      {text}
      <FontAwesomeIcon
        className={styles.createButton__rightIcon}
        icon={faCirclePlus}
      />
    </button>
  );
}

CreateButton.propTypes = {
  text: PropTypes.string,
  handleClick: PropTypes.func,
};

CreateButton.defaultProps = {
  text: "Create",
};
