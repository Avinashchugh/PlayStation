import { Grid, GridItem, Show,HStack } from "@chakra-ui/react";
import GameGrid from "./Components/GameGrid";
import NavBar from "./Components/NavBar";
import GenreList from "./Components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./Components/PlatformSelector";
import { platform } from "./hooks/UseGames";
import SortSelectors from "./Components/SortSelectors";

export interface GameQuery{
  genre: Genre|null;
  platform: platform|null;
  sortOrder:  string;
}
function App() {
  const[gameQuery,setGameQuery]=useState<GameQuery>({} as GameQuery);
  function sortOrder(sortOrder: string): void {
    throw new Error("Function not implemented.");
  }

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr'
      }}
    >
      <GridItem area="nav">
        <NavBar/>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre)=> setGameQuery({...gameQuery,genre})}/>
        </GridItem>
      </Show>
      <GridItem area="main">
        <HStack spacing={5} marginBottom={5}>
        <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform)=>setGameQuery({...gameQuery,platform})}/>
        <SortSelectors sortOrders={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })} sortOrder={""}/>
        </HStack>
        <GameGrid gameQuery={gameQuery}/>
      </GridItem>
    </Grid>
  );
}

export default App;
