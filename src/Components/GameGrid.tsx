import { Text, SimpleGrid, Skeleton } from "@chakra-ui/react";
import UseGame, { platform } from "../hooks/UseGames";
import GameCards from "./GameCards";
import { GameQuery } from "../App";

interface props{
  gameQuery: GameQuery
}

const GameGrid = ({gameQuery}:props) => {
  const { data, error, isLoading } = UseGame(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
        {data.map((game) => (
          <GameCards key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default GameGrid;
