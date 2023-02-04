import React from "react";
import styles from "./styles.module.css";

export default function TotalValue({ entries }) {
  function sunValue() {
    const filterExpenses = entries.filter((entry) => {
      return entry.type === "Despesa";
    });

    const sunValueExpensesResult = filterExpenses.reduce(
      (valorAnterior, valorAtual) => {
        return Number(valorAnterior) + Number(valorAtual.value);
      },
      0
    );

    const filterEntries = entries.filter((entry) => {
      return entry.type === "Entrada";
    });

    const sunValueEntriesResult = filterEntries.reduce(
      (valorAnterior, valorAtual) => {
        return Number(valorAnterior) + Number(valorAtual.value);
      },
      0
    );

    return `${sunValueEntriesResult - sunValueExpensesResult}`;
  }
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
            <p className={styles.finalPriceValue}>R$ {sunValue()},00</p>
          </div>
        </>
      )}
    </>
  );
}
