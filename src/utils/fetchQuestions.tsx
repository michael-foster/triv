import { QuestionObject } from "../types";

function byDifficulty(a: QuestionObject, b: QuestionObject) {
  if (a.difficulty === "hard") return 1;
  if (b.difficulty === "hard") return -1;
  if (a.difficulty === "medium") return 1;
  if (b.difficulty === "medium") return -1;
  return 1;
}

function scrambleAnswers(q: QuestionObject) {
  const answers = [];
  const incorrects = q.incorrectAnswers;
  const correctAnswerIndex = Math.floor(Math.random() * 4);
  for (let i = 0; i < 4; i++)
    answers.push(i === correctAnswerIndex ? q.correctAnswer : incorrects.pop());
  return {
    ...q,
    correctAnswerIndex,
    answers,
    difficulty: q.difficulty.charAt(0).toUpperCase() + q.difficulty.slice(1)
  };
}

export function fetchQuestions(onError: VoidFunction) {
  return fetch("https://the-trivia-api.com/api/questions?limit=5&region=US")
    .then((res) => res.json())
    .then((data) => data.sort(byDifficulty).map(scrambleAnswers));
}
