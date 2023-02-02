import React from "react";
import styles from "./styles.module.css";
import trash from "/src/assets/trash.svg";

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
        <img src={trash} alt="Lixo" />
      </button>
    </li>
  );
}
