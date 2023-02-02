import React from "react";
import styles from "./styles.module.css";

export default function NoResume() {
  return (
    <li className={styles.resumeOff}>
      <div className={styles.box1}></div>
      <div className={styles.boxContent}>
        <div className={styles.box2}></div>
        <div className={styles.box3}></div>
      </div>
    </li>
  );
}
