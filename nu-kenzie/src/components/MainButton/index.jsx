import React from "react";
import styles from "./styles.module.css";

export default function MainButton({ value, newClass, onClicked }) {
  return (
    <>
      <button
        onClick={onClicked}
        className={styles.MainButton + " " + newClass}
      >
        {value}
      </button>
    </>
  );
}
