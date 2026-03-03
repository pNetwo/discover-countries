import styles from "./styles.module.css";

type Props = React.ComponentProps<"button"> & {
  title: string;
  onClick: () => void
};

export function Button({ title, onClick }: Props) {
  return (
    <button type="button" onClick={onClick} className={styles.button}>
      {title}
    </button>
  );
}
