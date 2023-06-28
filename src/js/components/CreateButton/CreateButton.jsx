import PropTypes from "prop-types";
import styles from "./styles.module.scss";

export default function CreateButton({ text }) {
  return (
    <button className={styles.createButton}>
      {text}
      <img
        className={styles.createButton__rightIcon}
        src="src/assets/icons/plus.svg"
        alt=""
      />
    </button>
  );
}

CreateButton.propTypes = {
  text: PropTypes.string,
};

CreateButton.defaultProps = {
  text: "Create",
};
