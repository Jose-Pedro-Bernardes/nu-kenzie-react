import React from "react";
import styles from "./styles.module.css";
import SunValue from "../SunValue";

export default function TotalValue({ entries }) {
  return (
    <>
      {entries.length === 0 ? (
        <div className={styles.noEntriesValue}>
          <h4>...</h4>
        </div>
      ) : (
        <>
          <div className={styles.finalPrice}>
            <h2 className={styles.titleFinalPrice}>Valor total: </h2>
            <p className={styles.finalPriceValue}>R$ {SunValue(entries)},00</p>
          </div>
        </>
      )}
    </>
  );
}
