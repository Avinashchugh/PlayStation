import { Game } from "../hooks/UseGames";
import { Card, Image, CardBody, Heading, HStack } from "@chakra-ui/react";
import Icons from "./Icons";
import CriticScore from "./CriticScore";
interface props {
  game: Game;
}
const GameCards = ({ game }: props) => {
  return (
    <div>
      <Card borderRadius={10} overflow="hidden">
        <Image src={game.background_image} />
        <CardBody>
          <HStack justifyContent="space-between" marginBottom={3}>
            <Icons platforms={game.parent_platforms.map((p) => p.platform)} />
            <CriticScore score={game.metacritic} />
          </HStack>
          <Heading fontSize="2lg">{game.name}</Heading>
        </CardBody>
      </Card>
    </div>
  );
};

export default GameCards;
