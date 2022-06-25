/** @jsxImportSource theme-ui */
import { FC, useContext } from "react";
import { Button } from "theme-ui";
import { GameContext } from "../components";
import {
  clearState,
  setGameStatus
} from "../components/GameProvider/GameContextActions";
import { GameStatus } from "../types";
import { useBestScore } from "../utils";

type Props = {
  error?: boolean;
};

export const FinalView: FC<Props> = ({ error = false }) => {
  const {
    state: { totalCorrect, questions },
    dispatch
  } = useContext(GameContext);
  const bestScoreMessage = useBestScore();

  return (
    <div sx={{ textAlign: "center" }}>
      {!error && (
        <>
          <h1 sx={{ color: "primary" }}>You're a trivia master!</h1>
          <p>
            {questions ? `Score: ${totalCorrect} / ${questions.length}` : ""}
          </p>
          <p>{bestScoreMessage}</p>
        </>
      )}
      {error && (
        <h1 sx={{ color: "primary" }}>
          We could not load your questions, please try again.
        </h1>
      )}
      <div>
        <Button
          className="button-gradient"
          sx={{ mt: "40px", mb: "30px", minWidth: "160px" }}
          onClick={() => {
            dispatch(clearState());
            dispatch(setGameStatus(GameStatus.LOADING));
          }}
        >
          {error ? "Try Again" : "Play again!"}
        </Button>
        <br />
        <Button
          className="button-primary"
          sx={{ minWidth: "160px" }}
          onClick={() => {
            dispatch(setGameStatus(GameStatus.READY));
            dispatch(clearState());
          }}
        >
          Go Home
        </Button>
      </div>
    </div>
  );
};
