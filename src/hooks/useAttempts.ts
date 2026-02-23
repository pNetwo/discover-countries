import { useState } from "react";

export function useGameAttempts() {
  const [current, max] = useState(0);
  const MAX_ATTEMPTS = 10;

  const onRestart = () => {
    alert("Reiniciou");
  };

  return {
    current: 0,
    max: MAX_ATTEMPTS,
    onRestart,
  };
}
