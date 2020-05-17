import React from "react";
import Scoreboard from "./Scoreboard";

export default {
  title: "Scoreboard",
  component: Scoreboard,
};

export const withZeroScores = () => <Scoreboard wins={0} losses={0} />;

export const withScores = () => <Scoreboard wins={9} losses={1} />;
