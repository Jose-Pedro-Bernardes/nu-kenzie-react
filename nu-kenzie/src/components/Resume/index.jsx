import React from "react";
import styles from "./styles.module.css";

export default function Resume({ entry, valueValid, removeEntry }) {
  return (
    <li className={styles.resume}>
      <div className={styles.boxGreen}></div>
      <div className={styles.boxText}>
        <p className={styles.resumeName}>{entry.description}</p>
        <p className={styles.valueType}>{entry.type}</p>
      </div>
      <p className={styles.valueEntrie}>{valueValid(entry)}</p>
      <button
        onClick={() => removeEntry(entry.id)}
        className={styles.removeResumeBtn}
      >
        <img src="/src/assets/trash.svg" alt="Lixo" />
      </button>
    </li>
  );
}
