import PropTypes from "prop-types";
import style from "./input.module.scss";

export default function Input({ placeholder }) {
  return (
    <input className={style.input} type="text" placeholder={placeholder} />
  );
}

Input.propTypes = {
  placeholder: PropTypes.string,
};
