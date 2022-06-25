import { GameStatus, QuestionObject } from "../../types";

export type GameState = {
  status: GameStatus;
  totalCorrect: number;
  questions: null | QuestionObject[];
  currentQuestionIndex: number;
};

// Reducer Action Types
export enum ActionType {
  SET_GAME_STATUS,
  HANDLE_ANSWER,
  SET_QUESTIONS,
  INCREMENT_QUESTION,
  CLEAR_STATE
}

export interface SetGameStatusAction {
  type: ActionType.SET_GAME_STATUS;
  payload: GameStatus;
}

export interface HandleAnswerAction {
  type: ActionType.HANDLE_ANSWER;
  payload: boolean;
}

export interface SetQuestionAction {
  type: ActionType.SET_QUESTIONS;
  payload: QuestionObject[];
}

export interface IncrementQuestionAction {
  type: ActionType.INCREMENT_QUESTION;
}

export interface ClearStateAction {
  type: ActionType.CLEAR_STATE;
}

export type GameContextAction =
  | SetGameStatusAction
  | HandleAnswerAction
  | SetQuestionAction
  | IncrementQuestionAction
  | ClearStateAction;
