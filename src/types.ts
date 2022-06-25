export enum GameStatus {
  READY,
  LOADING,
  ERROR,
  IN_PROGRESS,
  COMPLETED
}

export type QuestionObject = {
  id: string;
  question: string;
  correctAnswer: string;
  correctAnswerIndex: number;
  incorrectAnswers: string[];
  answers: string[];
  difficulty: string;
};

export type QuestionResponse = {
  id: String;
  correct: Boolean;
};
