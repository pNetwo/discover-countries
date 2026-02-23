import { RefreshCw } from "lucide-react";
import logo from "../../assets/logo.png";

import styles from "./styles.module.css";

type Props = {
  current: number;
  max: number;
  onRestart: () => void;
};

export function Header({ current, max, onRestart }: Props) {
  return (
    <div className={styles.header}>
      <img src={logo} alt="Logo" />

      <div>
        <span>
          <strong>{current}</strong> de {max} tentativas
        </span>
        <button onClick={onRestart}>
          <RefreshCw />
        </button>
      </div>
    </div>
  );
}
