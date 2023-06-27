import style from "./logo.module.scss";

export default function Logo() {
  return (
    <div className={style.logo}>
      <img
        className={style.logo__icon}
        src="src/assets/icons/rocket.svg"
        alt=""
      />

      <p className={style.logo__name}>
        <span className={style.logo__to}>to</span>
        <span className={style.logo__do}>do</span>
      </p>
    </div>
  );
}
