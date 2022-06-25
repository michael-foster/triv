/** @jsxImportSource theme-ui */
import { StartView, LoadingView, QuestionView, FinalView } from "./views";
import { GameProvider } from "./components";
import { useContext } from "react";
import { GameContext } from "./components/GameProvider/GameContext";
import { ThemeProvider, Theme } from "theme-ui";
import "../open.css";
import { GameStatus } from "./types";

export const theme: Theme = {
  colors: {
    text: "#5E5986",
    primary: "#7939EF",
    borderGrey: "#F2F2F2",
    green: "#31DBA1",
    gold: "#FCB558",
    red: "#DB3B31",
    yellow: "#E8D741"
  },
  forms: {
    input: {
      outlineStyle: "none",
      backgroundColor: "none"
    }
  },
  badges: {
    primary: { borderRadius: "50px" }
  }
};

const ViewController = () => {
  const {
    state: { status }
  } = useContext(GameContext);

  switch (status) {
    case GameStatus.READY:
      return <StartView />;
    case GameStatus.LOADING:
      return <LoadingView />;
    case GameStatus.IN_PROGRESS:
      return <QuestionView />;
    case GameStatus.COMPLETED:
      return <FinalView />;
    case GameStatus.ERROR:
      return <FinalView error />;
  }
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GameProvider>
        <ViewController />
      </GameProvider>
    </ThemeProvider>
  );
}
