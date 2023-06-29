import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

export default function DeleteButton({ handleClick, className }) {
  return (
    <button
      onClick={handleClick}
      className={`${styles.deleteButton} ${className}`}
    >
      <FontAwesomeIcon
        className={styles.deleteButton__icon}
        icon={faTrashCan}
      />
    </button>
  );
}

DeleteButton.propTypes = {
  handleClick: PropTypes.func,
  className: PropTypes.string,
};

DeleteButton.defaultProps = {
  className: "",
};
