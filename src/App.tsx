import styles from "./app.module.css";

import { Header } from "./components/Header";
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
    </div>
  );
}
