import styles from "./styles.module.scss";

export default function Logo() {
  return (
    <div className={styles.logo}>
      <img
        className={styles.logo__icon}
        src="src/assets/icons/rocket.svg"
        alt=""
      />

      <p className={styles.logo__name}>
        <span className={styles.logo__to}>to</span>
        <span className={styles.logo__do}>do</span>
      </p>
    </div>
  );
}
