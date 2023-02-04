import React from "react";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import styles from "./styles.module.css";
import HeaderContainer from "../../components/HeaderContainer";
import MainButton from "../../components/MainButton";
import NoResume from "../../components/NoResume";
import Resume from "../../components/Resume";

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

    if (type === "") {
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

    return `R$ ${entry.value},00`;
  }
  function removeEntry(id) {
    setEntries(entries.filter((entry) => entry.id !== id));
  }

  function sunValue() {
    const sunValueResult = entries.reduce((valorAnterior, valorAtual) => {
      return Number(valorAtual.value) + valorAnterior;
    }, 0);

    return sunValueResult;
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
            <form>
              <input
                className={styles.inputDescript}
                type="text"
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
                onClicked={handleSubmit}
                type="submit"
              />
            </form>
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
                entries.map((entry) => (
                  <>
                    <Resume
                      key={entry.id}
                      entry={entry}
                      valueValid={valueValid}
                      removeEntry={removeEntry}
                    />
                  </>
                ))
              )}
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}
