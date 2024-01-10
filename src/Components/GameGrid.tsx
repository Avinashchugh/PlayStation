import { Text, SimpleGrid, Skeleton } from "@chakra-ui/react";
import UseGame from "../hooks/UseGames";
import GameCards from "./GameCards";
import { Genre } from "../hooks/UseGenres";

interface props{
  selectedGenre:  Genre | null;
}

const GameGrid = ({selectedGenre}:props) => {
  const { data, error, isLoading } = UseGame(selectedGenre);
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={3}>
        {data.map((game) => (
          <GameCards key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default GameGrid;
