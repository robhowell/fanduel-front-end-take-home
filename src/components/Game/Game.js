import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import sampleSize from "lodash.samplesize";

import PageContainer from "../PageContainer/PageContainer";
import Round from "../Round/Round";
import BlockButton from "../BlockButton/BlockButton";
import Scoreboard from "../Scoreboard/Scoreboard";

const DEFAULT_GAME_STATE = {
  wins: 0,
  losses: 0,
};

const Game = ({ gameData }) => {
  const [hasGameStarted, setHasGameStarted] = useState(false);
  const [gameResults, setGameResults] = useState(DEFAULT_GAME_STATE);
  const [currentPlayers, setCurrentPlayers] = useState(null);

  useEffect(() => {
    setCurrentPlayers(sampleSize(gameData.players, 2));
  }, [gameData.players]);

  const resetGame = () => {
    setGameResults(DEFAULT_GAME_STATE);
    setCurrentPlayers(sampleSize(gameData.players, 2));
  };

  return (
    <PageContainer>
      {hasGameStarted ? (
        <>
          <Scoreboard wins={gameResults.wins} losses={gameResults.losses} />

          <Round
            player1={currentPlayers[0]}
            player2={currentPlayers[1]}
            onRoundComplete={result => {
              setGameResults({
                wins:
                  result === "win" ? gameResults.wins + 1 : gameResults.wins,
                losses:
                  result === "win"
                    ? gameResults.losses
                    : gameResults.losses + 1,
              });
            }}
            nextButton={
              gameResults.wins < 10 ? (
                <BlockButton
                  onClick={() => {
                    setCurrentPlayers(sampleSize(gameData.players, 2));
                  }}
                >
                  Next round
                </BlockButton>
              ) : (
                <BlockButton onClick={resetGame}>
                  Game complete! Play again?
                </BlockButton>
              )
            }
          />
        </>
      ) : (
        <BlockButton
          onClick={() => {
            setHasGameStarted(true);
          }}
        >
          Start game
        </BlockButton>
      )}
    </PageContainer>
  );
};

Game.propTypes = {
  gameData: PropTypes.object.isRequired,
};

export default Game;
