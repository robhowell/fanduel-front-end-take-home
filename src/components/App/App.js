import React from "react";

import useGameData from "../../hooks/useGameData";
import Game from "../Game/Game";
import LoadingError from "../LoadingError/LoadingError";

const App = () => {
  const [gameData, isLoading, error] = useGameData();

  if (error) {
    return <LoadingError />;
  }

  return <div>{!isLoading && <Game gameData={gameData} />}</div>;
};

export default App;
