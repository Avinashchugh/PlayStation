import { Heading } from "@chakra-ui/react";

import { GameQuery } from "../App";
interface props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: props) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;
  return (
    <div>
      <Heading marginY={5} fontSize='5xl' as="h1">{heading}</Heading>
    </div>
  );
};

export default GameHeading;
