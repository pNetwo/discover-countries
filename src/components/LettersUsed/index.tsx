import { Letter } from "../Letter";
import styles from "./styles.module.css";

export function LettersUsed() {
  return (
    <div className={styles.lettersUsed}>
      <h5>Letras Utilizadas</h5>

      <div>
        <Letter value="S" size="small" color="success" />
        <Letter value="U" size="small" color="error" />
      </div>
    </div>
  );
}
