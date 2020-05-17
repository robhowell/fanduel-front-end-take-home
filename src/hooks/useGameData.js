import { useState, useEffect } from "react";
import axios from "axios";

const useGameData = () => {
  const [gameData, setGameData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getDataFromApi = async () => {
      try {
        const response = await axios.get(
          "https://gist.githubusercontent.com/liamjdouglas/bb40ee8721f1a9313c22c6ea0851a105/raw/6b6fc89d55ebe4d9b05c1469349af33651d7e7f1/Player.json"
        );
        setGameData(response.data);
      } catch (error) {
        setError(error);
      }

      setIsLoading(false);
    };

    getDataFromApi();
  }, []);

  return [gameData, isLoading, error];
};

export default useGameData;
