import React from "react";

export default function SunValue(entries) {
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
