import { Genre } from "./useGenres";
import useData from "./useData";
import { GameQuery } from "../App";
export interface platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: platform }[];
  metacritic: number;
}

const UseGame = (gameQuery:GameQuery ) =>
  useData<Game>("./games", { params: { genres: gameQuery.genre?.id, platforms: gameQuery.platform?.id } }, [
    gameQuery
  ]);

export default UseGame;
