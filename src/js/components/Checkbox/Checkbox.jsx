import style from "./checkbox.module.scss";

export default function Checkbox() {
  const data = {
    checked: false,
  };

  const clickHandler = (event) => {
    const checkElement = event.currentTarget;

    checkElement.classList.toggle(`${style.checkbox_checked}`);
    data.checked = !data.checked;
  };

  return (
    <div
      className={`${style.checkbox} ${
        data.checked ? style.checkbox_checked : ""
      }`}
      onClick={clickHandler}
    >
      <img
        className={style.checkbox__tick}
        src="src/assets/icons/tick.svg"
        alt=""
      />
    </div>
  );
}
