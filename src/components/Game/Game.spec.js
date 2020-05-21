import React from "react";
import { shallow, mount } from "enzyme";

import Game from "./Game";
import Round from "../Round/Round";
import Scoreboard from "../Scoreboard/Scoreboard";

jest.mock("../Round/Round", () => ({ nextButton, onRoundComplete }) => (
  <div>
    <button
      data-qa="mock-win-button"
      onClick={() => {
        onRoundComplete("win");
      }}
    >
      Win
    </button>

    <button
      data-qa="mock-loss-button"
      onClick={() => {
        onRoundComplete("loss");
      }}
    >
      Loss
    </button>

    {nextButton}
  </div>
));

jest.mock("../Scoreboard/Scoreboard", () => () => <div />);

const mockProps = {
  gameData: {
    players: [{}, {}, {}, {}, {}],
  },
};

describe("Game component", () => {
  describe("initial state", () => {
    const wrapper = shallow(<Game {...mockProps} />);

    it("show Start Game button", () => {
      const startButtonWrapper = wrapper.find('[data-qa="game-start-button"]');
      expect(startButtonWrapper.exists()).toBe(true);
    });

    it("does not show Scoreboard", () => {
      const scoreboardWrapper = wrapper.find(Scoreboard);
      expect(scoreboardWrapper.exists()).toBe(false);
    });

    it("does not show Round", () => {
      const roundWrapper = wrapper.find(Round);
      expect(roundWrapper.exists()).toBe(false);
    });
  });

  describe("after clicking Start Game button", () => {
    let wrapper;

    beforeEach(() => {
      wrapper = mount(<Game {...mockProps} />);
      wrapper.find('[data-qa="game-start-button"]').last().simulate("click");
    });

    it("hide Start Game button", () => {
      const startButtonWrapper = wrapper.find('[data-qa="game-start-button"]');
      expect(startButtonWrapper.exists()).toBe(false);
    });

    it("shows Scoreboard with 0 wins and 0 losses", () => {
      const scoreboardWrapper = wrapper.find(Scoreboard);
      expect(scoreboardWrapper.exists()).toBe(true);
      expect(scoreboardWrapper.prop("wins")).toBe(0);
      expect(scoreboardWrapper.prop("losses")).toBe(0);
    });

    it("shows Round", () => {
      const roundWrapper = wrapper.find(Round);
      expect(roundWrapper.exists()).toBe(true);
    });

    it("passes Next Round button to Round component", () => {
      const roundWrapper = wrapper.find(Round);
      const nextButtonProp = roundWrapper.prop("nextButton");

      const nextButtonWrapper = shallow(nextButtonProp);
      expect(nextButtonWrapper.is("[data-qa='next-round-button']")).toBe(true);
    });
  });

  describe("updates Scoreboard when round is complete", () => {
    let wrapper;

    beforeEach(() => {
      wrapper = mount(<Game {...mockProps} />);
      wrapper.find('[data-qa="game-start-button"]').last().simulate("click");
    });

    it("shows an extra win when user wins round", () => {
      const roundWrapper = wrapper.find(Round);
      roundWrapper.find('[data-qa="mock-win-button"]').simulate("click");

      const scoreboardWrapper = wrapper.find(Scoreboard);
      expect(scoreboardWrapper.prop("wins")).toBe(1);
      expect(scoreboardWrapper.prop("losses")).toBe(0);
    });

    it("shows an extra win when user loses round", () => {
      const roundWrapper = wrapper.find(Round);
      roundWrapper.find('[data-qa="mock-loss-button"]').simulate("click");

      const scoreboardWrapper = wrapper.find(Scoreboard);
      expect(scoreboardWrapper.prop("wins")).toBe(0);
      expect(scoreboardWrapper.prop("losses")).toBe(1);
    });
  });
});
