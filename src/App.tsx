import { Grid, GridItem, Show } from "@chakra-ui/react";
import GameGrid from "./Components/GameGrid";
import NavBar from "./Components/NavBar";
import GenreList from "./Components/GenreList";
function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar/>;
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          <GenreList/>;
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid/>;
      </GridItem>
    </Grid>
  );
}

export default App;
