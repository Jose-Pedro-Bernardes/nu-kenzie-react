import React from "react";
import styles from "./styles.module.css";

export default function MainButton({ value }) {
  return (
    <>
      <button className={styles.MainButton}>{value}</button>
    </>
  );
}
