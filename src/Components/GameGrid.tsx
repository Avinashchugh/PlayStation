import { Text,SimpleGrid, Skeleton } from "@chakra-ui/react";
import UseGame from "../hooks/UseGames";
import GameCards from "./GameCards";
import GameCardSkeletons from "./GameCardSkeletons";
const GameGrid = () => {
 const{games,error,isLoading}=UseGame();
 const skeletons = [1,2,3,4,5,6];
  return (
    <div>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{sm:1,md:2,lg:3,xl:5}} spacing={10}>
        {isLoading && skeletons.map(Skeleton => <GameCardSkeletons key={Skeleton}/>)}
        {games.map((game) => (
          <GameCards key={game.id} game={game}/>
        ))}
      </SimpleGrid> 
    </div>
  );
};

export default GameGrid;
