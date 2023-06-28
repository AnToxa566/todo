import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import { useState } from "react";

export default function Checkbox({ checked, updateData, className }) {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = (event) => {
    const checkElement = event.currentTarget;
    checkElement.classList.toggle(`${styles.checkbox_checked}`);

    updateData(!isChecked);
    setIsChecked(!isChecked);
  };

  return (
    <div
      className={`${styles.checkbox} ${
        isChecked ? styles.checkbox_checked : ""
      } ${className}`}
      onClick={handleChange}
    >
      <img
        className={styles.checkbox__tick}
        src="src/assets/icons/tick.svg"
        alt=""
      />
    </div>
  );
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
  updateData: PropTypes.func,
  className: PropTypes.string,
};

Checkbox.defaultProps = {
  checked: false,
  className: "",
};
