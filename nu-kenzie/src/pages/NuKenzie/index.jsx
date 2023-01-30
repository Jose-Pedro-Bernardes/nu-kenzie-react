import React, { useState } from "react";
import MainButton from "../../components/MainButton";
import styles from "./styles.module.css";

export default function NuKenzie({ setPage }) {
  return (
    <div className={styles.container}>
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
          <MainButton
            onClicked={() => setPage("DashBoard")}
            newClass={styles.mainButton}
            value="Iniciar"
          />
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
