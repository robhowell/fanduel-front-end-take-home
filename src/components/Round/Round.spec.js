import React from "react";
import { shallow } from "enzyme";

import Round from "./Round";

const mockProps = {
  player1: {
    first_name: "Harrison",
    fppg: 20.977272727272727,
    images: {
      default:
        "https://d17odppiik753x.cloudfront.net/playerimages/nba/15946.png",
    },
    injured: false,
    injury_details: null,
    last_name: "Barnes",
    salary: 4400,
  },
  player2: {
    first_name: "Shaun",
    fppg: 14.567948717948717,
    images: {
      default:
        "https://d17odppiik753x.cloudfront.net/playerimages/nba/9643.png",
    },
    injured: true,
    injury_details: "knee",
    last_name: "Livingston",
    salary: 4600,
  },
  onRoundComplete: jest.fn(),
  nextButton: () => <div />,
};

describe("Round component", () => {
  describe("initial state", () => {
    const wrapper = shallow(<Round {...mockProps} />);

    it("renders Player 1 with correct props", () => {
      const player1Wrapper = wrapper.find('[data-qa="round-player-1"]');
      expect(player1Wrapper.exists()).toBe(true);
      expect(player1Wrapper.prop("name")).toBe("Harrison Barnes");
      expect(player1Wrapper.prop("photo")).toBe(
        mockProps.player1.images.default.url
      );
      expect(player1Wrapper.prop("salary")).toBe(mockProps.player1.salary);
      expect(player1Wrapper.prop("fppg")).toBe(mockProps.player1.fppg);
      expect(player1Wrapper.prop("injury")).toBe("");
      expect(player1Wrapper.prop("showFppg")).toBe(false);
      expect(player1Wrapper.prop("isSelected")).toBe(false);
    });

    it("renders Player 2 with correct props", () => {
      const player2Wrapper = wrapper.find('[data-qa="round-player-2"]');
      expect(player2Wrapper.exists()).toBe(true);
      expect(player2Wrapper.prop("name")).toBe("Shaun Livingston");
      expect(player2Wrapper.prop("photo")).toBe(
        mockProps.player2.images.default.url
      );
      expect(player2Wrapper.prop("salary")).toBe(mockProps.player2.salary);
      expect(player2Wrapper.prop("fppg")).toBe(mockProps.player2.fppg);
      expect(player2Wrapper.prop("injury")).toBe("knee");
      expect(player2Wrapper.prop("showFppg")).toBe(false);
      expect(player2Wrapper.prop("isSelected")).toBe(false);
    });

    it("does not render You Were Correct message", () => {
      const correctMessageWrapper = wrapper.find(
        '[data-qa="round-correct-message"]'
      );
      expect(correctMessageWrapper.exists()).toBe(false);
    });

    it("does not render You Were Wrong message", () => {
      const wrongMessageWrapper = wrapper.find(
        '[data-qa="round-wrong-message"]'
      );
      expect(wrongMessageWrapper.exists()).toBe(false);
    });
  });

  describe("user clicks correct answer", () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Round {...mockProps} />);
      const player1Wrapper = wrapper.find('[data-qa="round-player-1"]');
      player1Wrapper.simulate("click");
    });

    it("shows FPPG of Player 1 and marks it as selected", () => {
      const player1Wrapper = wrapper.find('[data-qa="round-player-1"]');

      expect(player1Wrapper.prop("showFppg")).toBe(true);
      expect(player1Wrapper.prop("isSelected")).toBe(true);
    });

    it("shows FPPG of Player 2 and marks it as not selected", () => {
      const player2Wrapper = wrapper.find('[data-qa="round-player-2"]');

      expect(player2Wrapper.prop("showFppg")).toBe(true);
      expect(player2Wrapper.prop("isSelected")).toBe(false);
    });

    it("renders You Were Correct message", () => {
      const correctMessageWrapper = wrapper.find(
        '[data-qa="round-correct-message"]'
      );
      expect(correctMessageWrapper.exists()).toBe(true);
    });

    it("does not render You Were Wrong message", () => {
      const wrongMessageWrapper = wrapper.find(
        '[data-qa="round-wrong-message"]'
      );
      expect(wrongMessageWrapper.exists()).toBe(false);
    });
  });

  describe("user clicks wrong answer", () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Round {...mockProps} />);
      const player2Wrapper = wrapper.find('[data-qa="round-player-2"]');
      player2Wrapper.simulate("click");
    });

    it("shows FPPG of Player 1 and marks it as not selected", () => {
      const player1Wrapper = wrapper.find('[data-qa="round-player-1"]');

      expect(player1Wrapper.prop("showFppg")).toBe(true);
      expect(player1Wrapper.prop("isSelected")).toBe(false);
    });

    it("shows FPPG of Player 2 and marks it as selected", () => {
      const player2Wrapper = wrapper.find('[data-qa="round-player-2"]');

      expect(player2Wrapper.prop("showFppg")).toBe(true);
      expect(player2Wrapper.prop("isSelected")).toBe(true);
    });

    it("does not render  You Were Correct message", () => {
      const correctMessageWrapper = wrapper.find(
        '[data-qa="round-correct-message"]'
      );
      expect(correctMessageWrapper.exists()).toBe(false);
    });

    it("renders You Were Wrong message", () => {
      const wrongMessageWrapper = wrapper.find(
        '[data-qa="round-wrong-message"]'
      );
      expect(wrongMessageWrapper.exists()).toBe(true);
    });
  });
});
