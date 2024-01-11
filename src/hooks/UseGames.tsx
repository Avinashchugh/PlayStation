import { Genre } from "./useGenres";
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

const UseGame = (selectedGenre: Genre | null , selectedPlatform: platform|null ) =>
  useData<Game>("./games", { params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id } }, [
    selectedGenre?.id,selectedPlatform?.id
  ]);

export default UseGame;
