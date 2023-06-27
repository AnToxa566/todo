import Logo from "../Logo/Logo";
import style from "./header.module.scss";

export default function Header() {
  return (
    <div className={style.header}>
      <Logo />
    </div>
  );
}
