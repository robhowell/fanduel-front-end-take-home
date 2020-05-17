import React from "react";
import { action } from "@storybook/addon-actions";
import Player from "./Player";

export default {
  title: "Player",
  component: Player,
};

export const withoutInjury = () => (
  <Player
    onClick={action("clicked")}
    name="Damian Lillard"
    photo="https://d17odppiik753x.cloudfront.net/playerimages/nba/20848.png"
    salary={10600}
    fppg={38.9604938271605}
  />
);

export const withInjury = () => (
  <Player
    onClick={action("clicked")}
    name="Damian Lillard"
    photo="https://d17odppiik753x.cloudfront.net/playerimages/nba/20848.png"
    salary={10600}
    fppg={38.9604938271605}
    injury="knee"
  />
);

export const showingFPPG = () => (
  <Player
    onClick={action("clicked")}
    name="Damian Lillard"
    photo="https://d17odppiik753x.cloudfront.net/playerimages/nba/20848.png"
    salary={10600}
    fppg={38.9604938271605}
    injury="knee"
    showFppg
  />
);

export const selected = () => (
  <Player
    onClick={action("clicked")}
    name="Damian Lillard"
    photo="https://d17odppiik753x.cloudfront.net/playerimages/nba/20848.png"
    salary={10600}
    fppg={38.9604938271605}
    injury="knee"
    showFppg
    isSelected
  />
);
