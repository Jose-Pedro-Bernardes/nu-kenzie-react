import React from "react";
import styles from "./styles.module.css";
import MainButton from "../MainButton";

export default function ({
  handleDescriptionChange,
  handleValueChange,
  handleTypeChange,
  handleSubmit,
  type,
  value,
  description,
}) {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.inputDescript}
          type="text"
          value={value}
          placeholder="Digite aqui sua descrição"
          onInput={handleDescriptionChange}
        />
        <p className={styles.exampleDescript}>Ex: Compra de roupas</p>
        <div className={styles.alignLabel}>
          <label className={styles.labelValue} htmlFor="valor">
            Valor
          </label>
          <label htmlFor="select">Tipo de valor</label>
        </div>
        <div className={styles.alignInputs}>
          <input
            className={styles.inputValue}
            id="valor"
            type="text"
            value={description}
            placeholder="1"
            onChange={handleValueChange}
          />
          <p className={styles.exchange}>R$</p>
          <select
            className={styles.selectValue}
            name="selectValue"
            id="select"
            onChange={handleTypeChange}
            value={type}
          >
            <option value="select">Selecione o tipo</option>
            <option value="Entrada">Entrada</option>
            <option value="Despesa">Despesa</option>
          </select>
        </div>
        <MainButton
          value="Inserir Valor"
          newClass={styles.buttonAddToResume}
          type="submit"
        />
      </form>
    </>
  );
}
