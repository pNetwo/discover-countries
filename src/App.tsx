import styles from "./app.module.css";
import { Button } from "./components/Button";

import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Letter } from "./components/Letter";
import { LettersUsed } from "./components/LettersUsed";
import { Tip } from "./components/Tip";

import { useGameAttempts } from "./hooks/useAttempts";

export default function App() {
  const { current, max, onRestart } = useGameAttempts();

  return (
    <div className={styles.container}>
      <Header current={current} max={max} onRestart={onRestart} />

      <Tip
        name="Brasil"
        flag="https://flagpedia.net/data/flags/w580/br.webp"
        tip="É conhecido pelo carnaval e samba."
      />

      <div className={styles.letterWrapper}>
        <Letter value="B" />
        <Letter value="R" />
        <Letter value="A" />
        <Letter value="S" />
        <Letter value="I" />
        <Letter value="L" />
      </div>

      <h4>Palpites</h4>

      <div className={styles.inputWrapper}>
        <Input autoFocus maxLength={1} placeholder="?" />
        <Button title="Confirmar" />
      </div>

      <hr className={styles.divisor}/>

      <LettersUsed />

    </div>
  );
}
