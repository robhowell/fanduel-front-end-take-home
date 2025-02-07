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

  const onRoundComplete = result => {
    const wins = result === "win" ? gameResults.wins + 1 : gameResults.wins;

    const losses =
      result === "win" ? gameResults.losses : gameResults.losses + 1;

    setGameResults({
      wins,
      losses,
    });
  };

  const nextButton =
    gameResults.wins < 10 ? (
      <BlockButton
        onClick={() => {
          setCurrentPlayers(sampleSize(gameData.players, 2));
        }}
        data-qa="next-round-button"
      >
        Next round
      </BlockButton>
    ) : (
      <BlockButton onClick={resetGame} data-qa="game-play-again-button">
        Game complete! Play again?
      </BlockButton>
    );

  return (
    <PageContainer>
      {hasGameStarted && currentPlayers && currentPlayers.length === 2 ? (
        <>
          <Scoreboard wins={gameResults.wins} losses={gameResults.losses} />

          <Round
            player1={currentPlayers[0]}
            player2={currentPlayers[1]}
            onRoundComplete={onRoundComplete}
            nextButton={nextButton}
          />
        </>
      ) : (
        <BlockButton
          onClick={() => {
            setHasGameStarted(true);
          }}
          data-qa="game-start-button"
        >
          Start game
        </BlockButton>
      )}
    </PageContainer>
  );
};

Game.propTypes = {
  gameData: PropTypes.shape({
    players: PropTypes.array.isRequired,
  }).isRequired,
};

export default Game;
