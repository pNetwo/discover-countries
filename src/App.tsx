import styles from "./app.module.css";

import { Header } from "./components/Header";

import { useGameAttempts } from "./hooks/useAttempts";

export default function App() {
  const {current, max, onRestart } = useGameAttempts();

  return (
    <div className={styles.container}>
      <Header current={current} max={max} onRestart={onRestart} />
    </div>
  );
}
