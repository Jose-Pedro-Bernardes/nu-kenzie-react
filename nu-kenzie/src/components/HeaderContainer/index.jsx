import React from "react";
import NuKenzieDash from "/src/assets/nuKenzieDash.svg";
import styles from "./styles.module.css";

export default function HeaderContainer({ children }) {
  return (
    <>
      <header className={styles.header__container}>
        <div className={styles.header__align}>
          <img src={NuKenzieDash} alt="Nu Kenzie Logo" />
          {children}
        </div>
      </header>
    </>
  );
}
