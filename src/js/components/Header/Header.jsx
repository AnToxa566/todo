import Logo from "../Logo/Logo";
import styles from "./styles.module.scss";

export default function Header() {
  return (
    <div className={styles.header}>
      <Logo />
    </div>
  );
}
