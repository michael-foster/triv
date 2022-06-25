/** @jsxImportSource theme-ui */
import { useContext } from "react";
import { GameContext } from "../components";
import { Logo } from "../Logo";
import { setGameStatus } from "../components/GameProvider/GameContextActions";
import { GameStatus } from "../types";
import { motion } from "framer-motion";

export const StartView = () => {
  const { dispatch } = useContext(GameContext);

  return (
    <motion.div
      sx={{
        overflow: "hidden",
        pt: "50px",
        textAlign: "center"
      }}
    >
      <div
        onClick={() => dispatch(setGameStatus(GameStatus.LOADING))}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Logo />
      </div>
    </motion.div>
  );
};
