import React from "react";
import styles from "./styles.module.css";

export default function MainButton({ value, newClass }) {
  return (
    <>
      <button className={styles.MainButton + " " + newClass}>{value}</button>
    </>
  );
}
