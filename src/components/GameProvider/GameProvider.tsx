import React, { FC, useReducer, useMemo, useEffect } from "react";
import { fetchQuestions } from "../../utils";
import { GameStatus, QuestionObject } from "../../types";
import { GameContext, GameContextReducer, initialState } from "./GameContext";
import { setGameStatus, setQuestions } from "./GameContextActions";

export const GameProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(GameContextReducer, initialState);

  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);
  const onError = () => dispatch(setGameStatus(GameStatus.ERROR));

  useEffect(() => {
    if (state.status === GameStatus.LOADING) {
      fetchQuestions(onError)
        .then((questions: QuestionObject[]) => {
          dispatch(setQuestions(questions));
          dispatch(setGameStatus(GameStatus.IN_PROGRESS));
        })
        .catch(onError);
    }
  }, [state.status]);

  return (
    <GameContext.Provider value={value}>
      {React.createElement("div", { children, status: state.status })}
    </GameContext.Provider>
  );
};
