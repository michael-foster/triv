/** @jsxImportSource theme-ui */
import { Badge, Button } from "theme-ui";
import { GameContext, MultiChoice, CountdownBar } from "../components";
import { useContext, useEffect, useState } from "react";
import {
  handleAnswer,
  incrementQuestion
} from "../components/GameProvider/GameContextActions";
import { useCountdown } from "../utils";
import { motion } from "framer-motion";

const initialTime = 10;

export const QuestionView = () => {
  const {
    state: { questions, currentQuestionIndex, totalCorrect },
    dispatch
  } = useContext(GameContext);
  const [isResolutionPhase, setIsResolutionPhase] = useState<boolean>(false);
  const [wasCorrect, setWasCorrect] = useState<boolean>(false);
  const { setPause, setTime, percentRemaining } = useCountdown(initialTime);

  useEffect(() => {
    if (0 >= percentRemaining) {
      setIsResolutionPhase(true);
      dispatch(handleAnswer(false));
    }
  }, [percentRemaining, dispatch]);

  if (!questions) return null;
  const question = questions[currentQuestionIndex];

  const resolveQuestion = (isCorrect: boolean) => {
    setPause(true);
    setIsResolutionPhase(true);
    setWasCorrect(isCorrect);
    dispatch(handleAnswer(isCorrect));
  };

  return (
    <motion.div
      style={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      sx={{ px: ["2pc", "5pc", "10pc"], pt: "5pc" }}
    >
      {question && (
        <>
          <div
            sx={{
              width: "100%",
              height: "12px",
              mb: "20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <p>{`Question ${currentQuestionIndex + 1} of ${
              questions.length || ""
            }`}</p>
            <Badge px="8px" py="4px" bg="gold">
              {`Score: ${totalCorrect} / ${questions.length}`}
            </Badge>
          </div>
          <CountdownBar percentRemaining={percentRemaining} />
          <MultiChoice
            questionText={question.question}
            questionNumber={currentQuestionIndex + 1}
            answers={question.answers}
            correctAnswerIndex={question.correctAnswerIndex}
            isResolutionPhase={isResolutionPhase}
            onComplete={resolveQuestion}
          />
          <div
            sx={{
              width: "100%",
              mt: "8px",
              display: "flex",
              justifyContent: "flex-end"
            }}
          >
            <Badge
              sx={{
                color: "primary",
                bg: "#f4edfd"
              }}
              px="8px"
              py="4px"
            >
              {question.difficulty}
            </Badge>
          </div>
          {isResolutionPhase && (
            <p>{wasCorrect ? "You are correct!" : "Incorrect Answer"}</p>
          )}
          {isResolutionPhase && (
            <Button
              onClick={() => {
                dispatch(incrementQuestion());
                setIsResolutionPhase(false);
                setWasCorrect(false);
                setTime(initialTime);
                setPause(false);
              }}
              mt="40px"
              sx={{ width: "100%" }}
            >
              Next Question
            </Button>
          )}
        </>
      )}
    </motion.div>
  );
};
