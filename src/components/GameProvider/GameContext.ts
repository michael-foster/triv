import { createContext, Dispatch } from "react";
import { GameContextAction, ActionType, GameState } from "./GameContextTypes";
import { GameStatus } from "../../types";

export const initialState: GameState = {
  status: GameStatus.READY,
  questions: null,
  totalCorrect: 0,
  currentQuestionIndex: 0
};

export const GameContextReducer = (
  state: GameState,
  action: GameContextAction
) => {
  switch (action.type) {
    case ActionType.SET_GAME_STATUS: {
      return {
        ...state,
        status: action.payload
      };
    }
    case ActionType.SET_QUESTIONS: {
      return {
        ...state,
        questions: action.payload
      };
    }
    case ActionType.HANDLE_ANSWER: {
      return {
        ...state,
        totalCorrect: action.payload
          ? state.totalCorrect + 1
          : state.totalCorrect
      };
    }
    case ActionType.INCREMENT_QUESTION: {
      return {
        ...state,
        status:
          state.currentQuestionIndex + 1 === state.questions?.length
            ? GameStatus.COMPLETED
            : state.status,
        currentQuestionIndex:
          state.currentQuestionIndex + 1 === state.questions?.length
            ? 0
            : state.currentQuestionIndex + 1
      };
    }
    case ActionType.CLEAR_STATE: {
      return {
        ...state,
        totalCorrect: 0,
        currentQuestionIndex: 0
      };
    }
  }
};

export const GameContext = createContext<{
  state: GameState;
  dispatch: Dispatch<GameContextAction>;
}>({ state: initialState, dispatch: () => undefined });
