import React from "react";
import { shallow } from "enzyme";
import Scoreboard from "./Scoreboard";

const mockProps = {
  wins: 9,
  losses: 5,
};

describe("Scoreboard component", () => {
  const wrapper = shallow(<Scoreboard {...mockProps} />);

  describe("Wins", () => {
    const winsWrapper = wrapper.find('[data-qa="scoreboard-wins"]');

    it("renders title", () => {
      const titleWrapper = winsWrapper.find('[data-qa="scoreboard-title"]');
      expect(titleWrapper.exists()).toBe(true);
      expect(titleWrapper.text(`"Wins"`)).toMatchInlineSnapshot(`"Wins"`);
    });

    it("renders value", () => {
      const valueWrapper = winsWrapper.find('[data-qa="scoreboard-value"]');
      expect(valueWrapper.exists()).toBe(true);
      expect(valueWrapper.text()).toBe(`${mockProps.wins}`);
    });
  });

  describe("Losses", () => {
    const lossesWrapper = wrapper.find('[data-qa="scoreboard-losses"]');

    it("renders title", () => {
      const titleWrapper = lossesWrapper.find('[data-qa="scoreboard-title"]');
      expect(titleWrapper.exists()).toBe(true);
      expect(titleWrapper.text()).toMatchInlineSnapshot(`"Losses"`);
    });

    it("renders value", () => {
      const valueWrapper = lossesWrapper.find('[data-qa="scoreboard-value"]');
      expect(valueWrapper.exists()).toBe(true);
      expect(valueWrapper.text()).toBe(`${mockProps.losses}`);
    });
  });
});
