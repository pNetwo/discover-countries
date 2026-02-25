import { useState } from "react";
import { COUNTRIES_DATA, type Countries } from "../utils/countries";

export function useGame() {
  const [attempt, setAttempts] = useState(0);
  const [letter, setLetter] = useState("");
  const [country, setCountry] = useState<Countries | null>(null);

  function startGame() {
    const index = Math.floor(Math.random() * COUNTRIES_DATA.length);
    const randomCountry = COUNTRIES_DATA[index];

    setCountry(randomCountry);
    setAttempts(0);
    setLetter("");
  }

  return {
    country,
    startGame,
    attempt,
    letter,
  };
}
