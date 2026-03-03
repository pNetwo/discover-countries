import { useEffect } from "react";

import styles from "./app.module.css";

import { Button } from "./components/Button";

import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Letter } from "./components/Letter";
import { LettersUsed } from "./components/LettersUsed";
import { Tip } from "./components/Tip";

import { useGame } from "./hooks/useStartGame";

export default function App() {
  const {
    country,
    score,
    startGame,
    letter,
    lettersUsed,
    handleConfirm,
    setLetter,
    endGame,
    onRestart,
  } = useGame();

  useEffect(() => {
    startGame();
  }, []);

  useEffect(() => {
    endGame();
  }, [score, lettersUsed]);

  if (!country) {
    return;
  }

  return (
    <div className={styles.container}>
      <Header
        current={lettersUsed.length}
        max={country.name.length + 5}
        onRestart={onRestart}
      />

      <Tip name={country.name} flag={country.flag} tip={country.tip} />

      <div className={styles.letterWrapper}>
        {country.name.split("").map((letter, index) => {
          const letterUsed = lettersUsed.find(
            (used) => used.value.toUpperCase() === letter.toUpperCase(),
          );
          return (
            <Letter
              key={index}
              value={letterUsed?.value}
              color={letterUsed?.correct ? "success" : "default"}
            />
          );
        })}
      </div>

      <h4>Palpites</h4>

      <div className={styles.inputWrapper}>
        <Input
          autoFocus
          maxLength={1}
          placeholder="?"
          value={letter}
          onChange={(e) => setLetter(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleConfirm();
            }
          }}
        />
        <Button title="Confirmar" onClick={handleConfirm} />
      </div>

      <hr className={styles.divisor} />

      <LettersUsed key={country.id} data={lettersUsed} />
    </div>
  );
}
