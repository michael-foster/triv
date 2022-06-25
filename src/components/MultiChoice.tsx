/** @jsxImportSource theme-ui */
import { FC, useEffect, useState } from "react";
import { Radio } from "theme-ui";
import { motion } from "framer-motion";

type Props = {
  questionText: string;
  questionNumber: number;
  answers: string[];
  correctAnswerIndex: number;
  isResolutionPhase?: boolean;
  onComplete?: (correct: boolean) => void;
};

export const MultiChoice: FC<Props> = ({
  questionText,
  questionNumber,
  answers,
  correctAnswerIndex,
  isResolutionPhase = false,
  onComplete
}) => {
  const [internalSelection, setInternalSelection] = useState<null | number>(
    null
  );

  console.log(isResolutionPhase);

  useEffect(() => {
    if (internalSelection !== null && !isResolutionPhase && onComplete) {
      setInternalSelection(null);
      onComplete(internalSelection === correctAnswerIndex);
    }
  }, [internalSelection, isResolutionPhase, correctAnswerIndex, onComplete]);

  const isChecked = (index: number) => {
    if (isResolutionPhase && index === correctAnswerIndex) return true;
    if (isResolutionPhase && internalSelection === index) return true;
    return false;
  };

  const getFillColor = (index: number) => {
    if (isResolutionPhase && index !== correctAnswerIndex) return "red";
    return "green";
  };

  return (
    <motion.div
      positionTransition
      initial={{ opacity: 0, y: 50, scale: 0.3 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
    >
      <span>{`Q${questionNumber}. ${questionText}`}</span>
      <div
        sx={{
          mt: "20px",
          border: "2px solid",
          borderColor: "borderGrey",
          p: "12px",
          borderRadius: "10px"
        }}
      >
        {answers.map((answer, index) => (
          <motion.div
            key={answer}
            style={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.06, paddingLeft: "10px" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              if (!isResolutionPhase) {
                setInternalSelection(index);
              }
            }}
          >
            <label sx={{ display: "flex", alignItems: "center", py: "4px" }}>
              <Radio
                readOnly
                sx={{
                  mr: "8px",
                  fill: getFillColor(index),
                  bg: "white"
                }}
                checked={isChecked(index)}
              />
              {answer}
            </label>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
