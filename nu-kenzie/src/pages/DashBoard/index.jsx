import React from "react";
import MainButton from "../../components/MainButton";
import styles from "./styles.module.css";

export default function DashBoard({ setPage }) {
  return (
    <>
      <div className={styles.container}>
        <header className={styles.header__container}>
          <div className={styles.header__align}>
            <img src="/src/assets/nuKenzieDash.svg" alt="Nu Kenzie Logo" />
            <MainButton
              onClicked={() => setPage("LandingPage")}
              newClass={styles.header__button}
              value="Início"
            />
          </div>
        </header>
        <div className={styles.alignMain}>
          <main className={styles.main__container}>
            <section className={styles.section__addResume}>
              <h4 className={styles.title4}>Descrição</h4>

              <input
                className={styles.inputDescript}
                type="text"
                placeholder="Digite aqui sua descrição"
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
                />
                <p className={styles.exchange}>R$</p>
                <select
                  className={styles.selectValue}
                  name="selectValue"
                  id="select"
                >
                  <option value="entrada">Entrada</option>
                  <option value="despesa">Despesa</option>
                </select>
              </div>
              <MainButton
                value="Inserir Valor"
                onClicked={(e) => e.preventDefault()}
                newClass={styles.buttonAddToResume}
              />
            </section>
            <section className={styles.section__financialResume}>
              <h2 className={styles.title2}>Resumo financeiro</h2>
              <h1 className={styles.title1}>
                Você ainda não possui nenhum lançamento
              </h1>
              <ul className={styles.resumeList}>
                <li className={styles.resumeOff}>
                  <div className={styles.box1}></div>
                  <div className={styles.boxContent}>
                    <div className={styles.box2}></div>
                    <div className={styles.box3}></div>
                  </div>
                </li>
                <li className={styles.resumeOff}>
                  <div className={styles.box1}></div>
                  <div className={styles.boxContent}>
                    <div className={styles.box2}></div>
                    <div className={styles.box3}></div>
                  </div>
                </li>
                <li className={styles.resumeOff}>
                  <div className={styles.box1}></div>
                  <div className={styles.boxContent}>
                    <div className={styles.box2}></div>
                    <div className={styles.box3}></div>
                  </div>
                </li>
              </ul>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
