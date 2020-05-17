import React from "react";

import useGameData from "../../hooks/useGameData";
import Game from "../Game/Game";
import LoadingError from "../LoadingError/LoadingError";
import PageContainer from "../PageContainer/PageContainer";

const App = () => {
  const [gameData, isLoading, error] = useGameData();

  if (error) {
    return <LoadingError />;
  }

  if (isLoading) {
    return <PageContainer>Loading...</PageContainer>;
  }

  return <Game gameData={gameData} />;
};

export default App;
