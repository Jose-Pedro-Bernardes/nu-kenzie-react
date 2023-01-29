import React from "react";
import MainButton from "../components/MainButton";
import styles from "./styles.module.css";

export default function NuKenzie() {
  return (
    <div className={styles.mainAlign}>
      <main className={styles.mainContainer}>
        <section className={styles.contentTextSection}>
          <img
            className={styles.logo}
            src="/src/assets/nuKenzie.svg"
            alt="Nu Kenzie Logo"
          />
          <h1 className={styles.title1}>
            Centralize o controle das sua finanças
          </h1>
          <MainButton newClass={styles.mainButton} value="Iniciar"></MainButton>
        </section>
        <section className={styles.imgSection}>
          <img
            src="/src/assets/landingAsideImg.svg"
            alt="Illustração de uma página com duas contas sendo pagas"
          />
        </section>
      </main>
    </div>
  );
}
