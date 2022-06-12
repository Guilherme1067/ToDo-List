import Logo from "../assets/Logo.svg";

import styles from "./Header.module.css";
export const Header = () => {
  return (
    <header className={styles.header}>
      <img className={styles.image} src={Logo} />
    </header>
  );
};
