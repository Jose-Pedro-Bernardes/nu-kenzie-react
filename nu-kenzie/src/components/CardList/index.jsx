import React from "react";
import NoResume from "../NoResume";
import Resume from "../Resume";
import styles from "./styles.module.css";

export default function CardList({ entries, removeEntry }) {
  return (
    <>
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
                  removeEntry={removeEntry}
                ></Resume>
              </>
            ))}
          </>
        )}
      </ul>
    </>
  );
}
