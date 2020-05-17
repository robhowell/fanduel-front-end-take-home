import React from "react";
import { shallow } from "enzyme";
import Player from "./Player";

const mockProps = {
  onClick: jest.fn(),
  name: "Damian Lillard",
  photo: "https://d17odppiik753x.cloudfront.net/playerimages/nba/20848.png",
  salary: 10600,
  fppg: 38.9604938271605,
};

describe("Player component", () => {
  describe("by default", () => {
    const wrapper = shallow(<Player {...mockProps} />);

    it("renders name", () => {
      const nameWrapper = wrapper.find('[data-qa="player-name"]');
      expect(nameWrapper.exists()).toBe(true);
      expect(nameWrapper.text()).toBe(mockProps.name);
    });

    it("renders salary", () => {
      const salaryWrapper = wrapper.find('[data-qa="player-salary"]');
      expect(salaryWrapper.exists()).toBe(true);
      expect(salaryWrapper.text()).toBe(`Salary: $${mockProps.salary}`);
    });

    it("renders photo", () => {
      const photoWrapper = wrapper.find('[data-qa="player-photo"]');
      expect(photoWrapper.exists()).toBe(true);
      expect(photoWrapper.prop("src")).toBe(mockProps.photo);
    });

    it("does not render injury if not specified", () => {
      const injuryWrapper = wrapper.find('[data-qa="player-injury"]');
      expect(injuryWrapper.exists()).toBe(false);
    });

    it("does not render fppg if showFppg is not specified", () => {
      const fppgWrapper = wrapper.find('[data-qa="player-fppg"]');
      expect(fppgWrapper.exists()).toBe(false);
    });
  });

  describe("with injury", () => {
    const wrapper = shallow(<Player {...mockProps} injury="knee" />);

    it("renders injury", () => {
      const injuryWrapper = wrapper.find('[data-qa="player-injury"]');
      expect(injuryWrapper.exists()).toBe(true);
      expect(injuryWrapper.text()).toBe("Injury: knee");
    });
  });

  describe("showing FPPG", () => {
    const wrapper = shallow(<Player {...mockProps} showFppg />);

    it("renders FPPG", () => {
      const fppgWrapper = wrapper.find('[data-qa="player-fppg"]');
      expect(fppgWrapper.exists()).toBe(true);
      expect(fppgWrapper.text()).toBe(`FPPG: ${mockProps.fppg}`);
    });
  });
});
