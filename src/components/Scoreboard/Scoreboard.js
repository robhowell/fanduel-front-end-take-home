import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledScoreboard = styled.div`
  display: flex;
  font-family: system-ui, "Segoe UI", "Roboto", sans-serif;
  height: 60px;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
`;

const ScoreboardItem = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
`;

const ScoreboardWins = styled(ScoreboardItem)`
  background-color: #bced91;
`;

const ScoreboardLosses = styled(ScoreboardItem)`
  background-color: #eeb4b4;
`;

const ScoreboardTitle = styled.span`
  font-weight: bold;
  text-transform: uppercase;
`;

const Scoreboard = ({ wins, losses }) => (
  <StyledScoreboard>
    <ScoreboardWins data-qa="scoreboard-wins">
      <ScoreboardTitle data-qa="scoreboard-title">Wins</ScoreboardTitle>
      <span data-qa="scoreboard-value">{wins}</span>
    </ScoreboardWins>

    <ScoreboardLosses data-qa="scoreboard-losses">
      <ScoreboardTitle data-qa="scoreboard-title">Losses</ScoreboardTitle>
      <span data-qa="scoreboard-value">{losses}</span>
    </ScoreboardLosses>
  </StyledScoreboard>
);

Scoreboard.propTypes = {
  wins: PropTypes.number.isRequired,
  losses: PropTypes.number.isRequired,
};

export default Scoreboard;
