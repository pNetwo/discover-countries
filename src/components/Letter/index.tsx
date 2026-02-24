import styles from "./styles.module.css";

type Props = {
  value?: string;
  size?: "default" | "small";
  color?: "default" | "success" | "error";
};

export function Letter({
  value = "",
  size = "default",
  color = "default",
}: Props) {
  return (
    <div
      className={`${styles.letter} ${size === "small" && styles.letterSmall} ${color === "success" && styles.letterSuccess} ${color === "error" && styles.letterError}`}
    >
      <span>{value}</span>
    </div>
  );
}
