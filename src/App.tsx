import { useEffect } from "react";
import styles from "./app.module.css";
import { Button } from "./components/Button";

import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Letter } from "./components/Letter";
import { LettersUsed } from "./components/LettersUsed";
import { Tip } from "./components/Tip";

import { useGameAttempts } from "./hooks/useAttempts";
import { useGame } from "./hooks/useStartGame";

export default function App() {
  const { country, startGame, attempt, letter } = useGame();
  const { current, max, onRestart } = useGameAttempts();

  useEffect(() => {
    startGame();
  }, []);

  if (!country) {
    return;
  }

  return (
    <div className={styles.container}>
      <Header current={attempt} max={max} onRestart={onRestart} />

      <Tip
        name={country.name}
        flag={country.flag}
        tip={country.tip}
      />

      <div className={styles.letterWrapper}>
        {country.name.split("").map(() => (
          <Letter value="" />
        ))}
      </div>

      <h4>Palpites</h4>

      <div className={styles.inputWrapper}>
        <Input autoFocus maxLength={1} placeholder="?" />
        <Button title="Confirmar" />
      </div>

      <hr className={styles.divisor} />

      <LettersUsed />
    </div>
  );
}
