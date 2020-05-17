import { useEffect } from "react";
import axios from "axios";

import useGameData from "./useGameData";

jest.mock("react", () => ({
  useState: jest.fn().mockReturnValue([null, jest.fn()]),
  useEffect: jest.fn(),
}));

jest.mock("axios", () => ({
  get: jest.fn(),
}));

beforeEach(jest.clearAllMocks);

describe(useGameData, () => {
  it("Runs callback once with useEffect", () => {
    useGameData();
    expect(useEffect).toHaveBeenCalledTimes(1);
    // Passes empty array as second argument to run effect once
    expect(useEffect.mock.calls[0][1]).toEqual([]);
  });

  describe("useEffect callback", () => {
    it("calls axios.get() with correct URL", () => {
      useGameData();
      const useEffectCallback = useEffect.mock.calls[0][0];

      useEffectCallback();
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenLastCalledWith(
        "https://gist.githubusercontent.com/liamjdouglas/bb40ee8721f1a9313c22c6ea0851a105/raw/6b6fc89d55ebe4d9b05c1469349af33651d7e7f1/Player.json"
      );
    });
  });
});
