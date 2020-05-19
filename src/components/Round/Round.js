import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Player from "../Player/Player";

const Players = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;

  & > * {
    flex: 1;

    &:last-child {
      margin-left: 10px;
    }
  }
`;

const ResultMessage = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 20px auto;
  padding: 10px;
  text-align: center;
`;

const WinMessage = styled(ResultMessage)`
  background-color: #bced91;
`;

const LossMessage = styled(ResultMessage)`
  background-color: #eeb4b4;
`;

const Round = ({ player1, player2, onRoundComplete, nextButton }) => {
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  useEffect(() => {
    setSelectedPlayer(null);
  }, [player1, player2]);

  const playerWithHighestFppg = player1.fppg > player2.fppg ? 1 : 2;

  const guessPlayer = player => {
    if (selectedPlayer === null) {
      setSelectedPlayer(player);
      onRoundComplete(player === playerWithHighestFppg ? "win" : "loss");
    }
  };

  return (
    <div>
      <Players>
        <Player
          onClick={() => guessPlayer(1)}
          name={`${player1.first_name} ${player1.last_name}`}
          photo={player1.images.default.url}
          salary={player1.salary}
          fppg={player1.fppg}
          injury={player1.injured ? player1.injury_details : ""}
          showFppg={selectedPlayer !== null}
          isSelected={selectedPlayer === 1}
        />

        <Player
          onClick={() => guessPlayer(2)}
          name={`${player2.first_name} ${player2.last_name}`}
          photo={player2.images.default.url}
          salary={player2.salary}
          fppg={player2.fppg}
          injury={player2.injured ? player2.injury_details : ""}
          showFppg={selectedPlayer !== null}
          isSelected={selectedPlayer === 2}
        />
      </Players>

      {selectedPlayer === playerWithHighestFppg && (
        <WinMessage>You were correct!</WinMessage>
      )}

      {selectedPlayer !== null && selectedPlayer !== playerWithHighestFppg && (
        <LossMessage>Sorry, you were wrong!</LossMessage>
      )}

      {selectedPlayer !== null && nextButton}
    </div>
  );
};

export default Round;
