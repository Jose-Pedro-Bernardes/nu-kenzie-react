import React from "react";
import styles from "./styles.module.css";
import trash from "/src/assets/trash.svg";

export default function Resume({ entry, valueValid, removeEntry }) {
  return (
    <>
      <li className={styles.resume}>
        {entry.type === "Despesa" ? (
          <div className={styles.box1}></div>
        ) : (
          <div className={styles.boxGreen}></div>
        )}
        <div className={styles.boxText}>
          <p className={styles.resumeName}>{entry.description}</p>
          <p className={styles.valueType}>{entry.type}</p>
        </div>

        {entry.type === "Despesa" ? (
          <p className={styles.valueEntrie}>{valueValid}</p>
        ) : (
          <p className={styles.valueEntrie}>R$ {entry.value},00</p>
        )}

        <button
          onClick={() => removeEntry(entry.id)}
          className={styles.removeResumeBtn}
        >
          <img src={trash} alt="Lixo" />
        </button>
      </li>
    </>
  );
}
