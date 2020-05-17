import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import PageContainer from "../PageContainer/PageContainer";

const PageTitle = styled.h1`
  font-size: 2rem;
`;

const Game = ({ gameData }) => {
  return (
    <PageContainer>
      <PageTitle>FanDuel Points Challenge</PageTitle>
      <button>Start game</button>
      <pre>{gameData.players.length} players</pre>
    </PageContainer>
  );
};

Game.propTypes = {
  gameData: PropTypes.object.isRequired,
};

export default Game;
