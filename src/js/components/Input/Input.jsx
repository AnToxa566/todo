import PropTypes from "prop-types";
import styles from "./styles.module.scss";

export default function Input({ value, handleChange, placeholder }) {
  return (
    <input
      type="text"
      className={styles.input}
      placeholder={placeholder}
      onChange={handleChange}
      value={value}
    />
  );
}

Input.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
  placeholder: PropTypes.string,
};
