import { List, ListItem, HStack, Image , Button, Spinner, Heading} from "@chakra-ui/react"; 
import useGenre, { Genre } from "../hooks/useGenres";
interface props{
  onSelectGenre: (genre:Genre) => void;
  selectedGenre: Genre | null;
}
const GenreList = ({selectedGenre,onSelectGenre}: props) => {
  const { data,isLoading, error } = useGenre();
  if(isLoading) return <Spinner/ >
  if(error) return null;
  return (
    <div>
      <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY='5px'>
            <HStack>
              <Image
                objectFit='cover'
                boxSize="32px"
                borderRadius={8}
                src={genre.image_background}
              />
              <Button whiteSpace='normal' textAlign='left' fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} onClick={()=>onSelectGenre(genre)} fontSize='lg' variant='link'>{genre.name}</Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default GenreList;
