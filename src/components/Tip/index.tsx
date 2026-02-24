import { Lightbulb } from "lucide-react";

import styles from "./styles.module.css";

type Props = {
  name: string;
  tip: string;
  flag: string;
};

export function Tip({ name, tip, flag }: Props) {
  return (
    <div className={styles.tipContainer}>
      <div className={styles.flagWrapper}>
        <img src={flag} alt={`Bandeira do país: ${name}`} />
      </div>

      <div className={styles.tipWrapper}>
        <Lightbulb className={styles.icon} size={28}/>

        <div>
          <h3>Dica</h3>
          <p>{tip}</p>
        </div>
      </div>
    </div>
  );
}
