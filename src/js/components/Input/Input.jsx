import PropTypes from "prop-types";
import styles from "./styles.module.scss";

export default function Input({ handleChange, placeholder }) {
  return (
    <input
      className={styles.input}
      onChange={handleChange}
      type="text"
      placeholder={placeholder}
    />
  );
}

Input.propTypes = {
  handleChange: PropTypes.func,
  placeholder: PropTypes.string,
};
