import {
  ActionType,
  ClearStateAction,
  HandleAnswerAction,
  IncrementQuestionAction,
  SetGameStatusAction,
  SetQuestionAction
} from "./GameContextTypes";
import { GameStatus, QuestionObject } from "../../types";

export const setGameStatus = (status: GameStatus): SetGameStatusAction => ({
  type: ActionType.SET_GAME_STATUS,
  payload: status
});

export const setQuestions = (
  questions: QuestionObject[]
): SetQuestionAction => ({
  type: ActionType.SET_QUESTIONS,
  payload: questions
});

export const handleAnswer = (isCorrect: boolean): HandleAnswerAction => ({
  type: ActionType.HANDLE_ANSWER,
  payload: isCorrect
});

export const incrementQuestion = (): IncrementQuestionAction => ({
  type: ActionType.INCREMENT_QUESTION
});

export const clearState = (): ClearStateAction => ({
  type: ActionType.CLEAR_STATE
});
