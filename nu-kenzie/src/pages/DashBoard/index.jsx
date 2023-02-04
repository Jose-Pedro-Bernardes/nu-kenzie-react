import React from "react";
import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import styles from "./styles.module.css";
import HeaderContainer from "../../components/HeaderContainer";
import MainButton from "../../components/MainButton";
import NoResume from "../../components/NoResume";
import Resume from "../../components/Resume";
import TotalValue from "../../components/TotalValue";
import Form from "../../components/Form";

export default function DashBoard({ setPage }) {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState(0);
  const [type, setType] = useState("");
  const [entries, setEntries] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();

    if (!description) {
      return alert("Descrição inválida.");
    }

    if (type === "" || type === "select") {
      return alert("Selecione o tipo de resumo.");
    }

    setEntries([...entries, { id: uuid(), description, value, type }]);
    setDescription("");
    setValue(0);
    setType("");
  }

  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }

  function handleValueChange(event) {
    setValue(event.target.value);
  }

  function handleTypeChange(event) {
    setType(event.target.value);
  }

  function valueValid(entry) {
    const valueAsNumber = Number(value);
    if (isNaN(valueAsNumber)) {
      return alert("O valor precisa ser um número válido");
    }

    if (entry.type === "Despesa") {
      return `R$  -${entry.value},00`;
    }
  }
  function removeEntry(id) {
    setEntries(entries.filter((entry) => entry.id !== id));
  }

  return (
    <div className={styles.container}>
      <HeaderContainer>
        <MainButton
          onClicked={() => setPage("LandingPage")}
          newClass={styles.header__button}
          value="Início"
        />
      </HeaderContainer>
      <div className={styles.alignMain}>
        <main className={styles.main__container}>
          <section className={styles.section__addResume}>
            <h4 className={styles.title4}>Descrição</h4>
            <Form
              handleDescriptionChange={handleDescriptionChange}
              handleValueChange={handleValueChange}
              handleTypeChange={handleTypeChange}
              handleSubmit={handleSubmit}
            />
            <TotalValue entries={entries} />
          </section>
          <section className={styles.section__financialResume}>
            <h2 className={styles.title2}>Resumo financeiro</h2>

            <ul className={styles.resumeList}>
              {entries.length === 0 ? (
                <>
                  <h1 className={styles.title1}>
                    Você ainda não possui nenhum lançamento
                  </h1>
                  <NoResume />
                  <NoResume />
                  <NoResume />
                </>
              ) : (
                <>
                  {entries.map((entry) => (
                    <>
                      <Resume
                        key={entry.id}
                        entry={entry}
                        valueValid={valueValid(entry)}
                        removeEntry={removeEntry}
                      ></Resume>
                    </>
                  ))}
                </>
              )}
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}
