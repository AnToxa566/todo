import PropTypes from "prop-types";
import style from "./create-button.module.scss";

export default function CreateButton({ text }) {
  return (
    <button className={style.createButton}>
      {text || "Create"}
      <img
        className={style.createButton__rightIcon}
        src="src/assets/icons/plus.svg"
        alt=""
      />
    </button>
  );
}

CreateButton.propTypes = {
  text: PropTypes.string,
};
