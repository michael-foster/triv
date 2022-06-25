/** @jsxImportSource theme-ui */
import { FC } from "react";
import { motion } from "framer-motion";

type Props = {
  percentRemaining: number;
};

export const CountdownBar: FC<Props> = ({ percentRemaining }) => (
  <div
    sx={{
      height: "12px",
      mb: "20px",
      position: "relative"
    }}
  >
    <div
      sx={{
        width: `100%`,
        height: "12px",
        bg: "primary",
        borderRadius: "10px",
        mb: "20px",
        position: "absolute",
        opacity: "0.2"
      }}
    />
    <motion.div
      animate={{ width: `${percentRemaining}%` }}
      sx={{
        width: `100%`,
        height: "12px",
        bg: "primary",
        borderRadius: "10px",
        mb: "20px",
        position: "absolute"
      }}
    />
  </div>
);
