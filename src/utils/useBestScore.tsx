import { useContext, useEffect, useState } from "react";
import { GameContext } from "../components";

export const useBestScore = () => {
  const {
    state: { totalCorrect, questions }
  } = useContext(GameContext);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    if (!questions) return;
    const thisScore = totalCorrect / questions.length;
    const best = sessionStorage.getItem("triv_best");
    const date = new Date();
    const dateString = `${
      date.getMonth() + 1
    }/${date.getDay()}/${date.getFullYear()}`;
    const newSessionObject = JSON.stringify({
      totalCorrect,
      questions: questions.length,
      date: dateString
    });

    console.log(newSessionObject, best);

    if (!best) {
      sessionStorage.setItem("triv_best", newSessionObject);
      setMessage("This was your best score yet!");
      return;
    }

    const parsedBest = JSON.parse(best);
    const prevBest = parsedBest.totalCorrect / parsedBest.questions;

    if (thisScore > prevBest) {
      sessionStorage.setItem("triv_best", newSessionObject);
      setMessage("This was your best score yet!");
    } else {
      setMessage(
        `Your best score so far was ${parsedBest.totalCorrect} out of ${parsedBest.questions} questions which you got on ${dateString}.`
      );
    }
  }, [totalCorrect, questions]);

  return message;
};
