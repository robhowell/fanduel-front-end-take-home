import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledPlayer = styled.div`
  background-color: hsl(201, 85%, 98%);
  border-radius: 5px;
  border: 3px solid
    ${({ isSelected }) =>
      isSelected ? "hsl(201, 85%, 30%)" : "hsl(201, 85%, 90%)"};
  display: flex;
  flex-direction: column;
  font-family: system-ui, "Segoe UI", "Roboto", sans-serif;
  justify-content: space-between;
  max-width: 200px;
  transition: all 75ms ease-in-out;

  &:hover {
    @media (hover: hover) {
      border-color: ${({ isSelected }) =>
        isSelected ? "hsl(201, 85%, 30%)" : "hsl(201, 85%, 60%)"};
      cursor: pointer;
    }
  }
`;

const PlayerName = styled.h3`
  color: hsl(201, 85%, 37%);
  font-size: 1.2rem;
  margin-bottom: 5px;
  padding: 0 5px;
  text-align: center;
`;

const PlayerStat = styled.div`
  color: hsl(201, 85%, 37%);
  font-size: 1rem;
  padding: 0 5px;
  text-align: center;
`;

const PlayerFPPG = styled.div`
  color: hsl(201, 85%, 30%);
  font-size: 0.6rem;
  font-weight: bold;
  margin-top: 5px;
  padding: 0 5px;
  text-align: center;
`;

const PhotoWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const PlayerPhoto = styled.img`
  border-radius: 2px;
  max-width: 100%;
`;

const Player = ({
  fppg,
  injury,
  isSelected,
  name,
  onClick,
  photo,
  salary,
  showFppg,
}) => (
  <StyledPlayer isSelected={isSelected} onClick={onClick}>
    <div>
      <PlayerName data-qa="player-name">{name}</PlayerName>
      <PlayerStat data-qa="player-salary">Salary: ${salary}</PlayerStat>

      {!!injury && (
        <PlayerStat data-qa="player-injury">Injury: {injury}</PlayerStat>
      )}

      <PlayerFPPG data-qa="player-fppg">
        FPPG: {!!showFppg ? fppg : "?"}
      </PlayerFPPG>
    </div>

    <PhotoWrapper>
      <PlayerPhoto src={photo} data-qa="player-photo" />
    </PhotoWrapper>
  </StyledPlayer>
);

Player.propTypes = {
  fppg: PropTypes.number.isRequired,
  injury: PropTypes.string,
  isSelected: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  photo: PropTypes.string.isRequired,
  salary: PropTypes.number.isRequired,
  showFppg: PropTypes.bool,
};

export default Player;
