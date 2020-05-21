import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Game from "../Game/Game";
import LoadingError from "../LoadingError/LoadingError";

const SUCCESS_STATE = [{}, false, false];
const LOADING_STATE = [{}, true, false];
const ERROR_STATE = [{}, false, true];

let mockUseGameDataValue;

jest.mock("../../hooks/useGameData", () => jest.fn(() => mockUseGameDataValue));

beforeEach(jest.clearAllMocks);

describe("App component", () => {
  describe("when gameData is returned", () => {
    let wrapper;

    beforeEach(() => {
      mockUseGameDataValue = SUCCESS_STATE;
      wrapper = shallow(<App />);
    });

    it("renders Game", () => {
      expect(wrapper.find(Game).exists()).toBe(true);
    });

    it("does not render loading message", () => {
      expect(wrapper.find('[data-qa="app-loading-message"]').exists()).toBe(
        false
      );
    });

    it("does not render loading error", () => {
      expect(wrapper.find(LoadingError).exists()).toBe(false);
    });
  });

  describe("when loading", () => {
    let wrapper;

    beforeEach(() => {
      mockUseGameDataValue = LOADING_STATE;
      wrapper = shallow(<App />);
    });

    it("does not render Game", () => {
      expect(wrapper.find(Game).exists()).toBe(false);
    });

    it("render loading message", () => {
      expect(wrapper.find('[data-qa="app-loading-message"]').exists()).toBe(
        true
      );
    });

    it("does not render loading error", () => {
      expect(wrapper.find(LoadingError).exists()).toBe(false);
    });
  });

  describe("when error occurs", () => {
    let wrapper;

    beforeEach(() => {
      mockUseGameDataValue = ERROR_STATE;
      wrapper = shallow(<App />);
    });

    it("does not render Game", () => {
      expect(wrapper.find(Game).exists()).toBe(false);
    });

    it("does not render loading message", () => {
      expect(wrapper.find('[data-qa="app-loading-message"]').exists()).toBe(
        false
      );
    });

    it("render loading error", () => {
      expect(wrapper.find(LoadingError).exists()).toBe(true);
    });
  });
});
