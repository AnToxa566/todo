import PropTypes from "prop-types";
import style from "./checkbox.module.scss";
import { useState } from "react";

export default function Checkbox({ checked, updateData, className }) {
  const [isChecked, setIsChecked] = useState(checked || false);

  const handleChange = (event) => {
    const checkElement = event.currentTarget;
    checkElement.classList.toggle(`${style.checkbox_checked}`);

    updateData(!isChecked);
    setIsChecked(!isChecked);
  };

  return (
    <div
      className={`${style.checkbox} ${
        isChecked ? style.checkbox_checked : ""
      } ${className}`}
      onClick={handleChange}
    >
      <img
        className={style.checkbox__tick}
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
