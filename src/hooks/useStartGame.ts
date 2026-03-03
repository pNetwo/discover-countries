import { useState } from "react";
import type { LettersUsedProps } from "../components/LettersUsed";
import { COUNTRIES_DATA, type Countries } from "../utils/countries";

export function useGame() {
  const [score, setScore] = useState(0);
  const [lettersUsed, setLettersUsed] = useState<LettersUsedProps[]>([]);
  const [letter, setLetter] = useState("");
  const [country, setCountry] = useState<Countries | null>(null);

  function startGame() {
    const index = Math.floor(Math.random() * COUNTRIES_DATA.length);
    const randomCountry = COUNTRIES_DATA[index];

    setCountry(randomCountry);

    setScore(0);
    setLetter("");
    setLettersUsed([]);
  }

  function onRestart() {
    const isConfirmed = window.confirm(
      `Você tem certeza que quer reiniciar o jogo?`,
    );

    if (isConfirmed) {
      startGame();
    }
  }

  function gameCompleted(message: string) {
    alert(message);
    startGame();
  }

  function endGame() {
    if (!country) {
      return;
    }

    setTimeout(() => {
      if (score === country.name.length) {
        gameCompleted(`Parabéns, você acertou o país.`);
      }

      const attemptLimit = country.name.length + 5;
      if (lettersUsed.length === attemptLimit) {
        gameCompleted(
          `Que pena, você usou todas as tentativas. A resposta é: ${country.name}`,
        );
      }
    }, 200);
  }

  function handleConfirm() {
    if (!country) {
      return;
    }

    if (!letter.trim()) {
      return alert("Digite uma letra!");
    }

    const value = letter.toUpperCase();
    const exist = lettersUsed.find(
      (used) => used.value.toUpperCase() === value,
    );

    if (exist) {
      setLetter("");
      return alert(`Você já utilizou a letra ${value}`);
    }

    const hits = country.name
      .toUpperCase()
      .split("")
      .filter((char) => char === value).length;

    const correct = hits > 0;
    const currentScore = score + hits;

    setLettersUsed((prevState) => [...prevState, { value, correct }]);
    setScore(currentScore);

    setLetter("");
  }

  return {
    country,
    startGame,
    score,
    letter,
    lettersUsed,
    handleConfirm,
    setLetter,
    endGame,
    onRestart,
  };
}
