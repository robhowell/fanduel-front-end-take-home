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

const Scoreboard = ({ wins, losses }) => (
  <StyledScoreboard>
    <ScoreboardWins>
      <strong>WINS</strong>
      <span>{wins}</span>
    </ScoreboardWins>

    <ScoreboardLosses>
      <strong>LOSSES</strong>
      <span>{losses}</span>
    </ScoreboardLosses>
  </StyledScoreboard>
);

Scoreboard.propTypes = {
  wins: PropTypes.number.isRequired,
  losses: PropTypes.number.isRequired,
};

export default Scoreboard;
