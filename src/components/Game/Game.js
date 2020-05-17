import React, { useState } from "react";
import PropTypes from "prop-types";

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
  const [roundsPlayed, setRoundsPlayed] = useState(0);

  const resetGame = () => {
    setGameResults(DEFAULT_GAME_STATE);
    setRoundsPlayed(0);
  };

  const [player1, player2] = gameData.players;

  return (
    <PageContainer>
      {hasGameStarted ? (
        <>
          <Scoreboard wins={gameResults.wins} losses={gameResults.losses} />
          <Round
            player1={player1}
            player2={player2}
            nextButton={
              roundsPlayed < 10 ? (
                <BlockButton onClick={resetGame}>
                  Game complete! Play again?
                </BlockButton>
              ) : (
                <BlockButton onClick={resetGame}>Next round</BlockButton>
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
