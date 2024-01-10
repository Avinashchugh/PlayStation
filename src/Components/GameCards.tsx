import { Game } from '../hooks/UseGames'
import { Card,Image,CardBody,Heading,HStack} from '@chakra-ui/react';
import Icons from './Icons';
import CriticScore from './CriticScore';
interface props{
    game: Game;
}
const GameCards = ({game}: props) => {
  return (
    <div>
      <Card borderRadius={10} overflow='hidden'>    
        <Image src={game.background_image}/>
        <CardBody>
            <Heading fontSize='2lg'>{game.name}</Heading>
           <HStack justifyContent='space-between'>
            <Icons platforms={game.parent_platforms.map(p=>p.platform)}/>
            <CriticScore score={game.metacritic}/>
           </HStack>
        </CardBody>
      </Card>
    </div>
  )
}

export default GameCards
