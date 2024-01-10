import { Genre } from "./UseGenres";
import useData from "./useData";
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

const UseGame = (selectedGenre: Genre | null) =>
  useData<Game>("./games", { params: { genres: selectedGenre?.id } }, [
    selectedGenre?.id,
  ]);

export default UseGame;
