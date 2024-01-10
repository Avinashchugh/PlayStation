import { List, ListItem, HStack, Image , Text, Button, Spinner} from "@chakra-ui/react"; 
import useGenre, { Genre } from "../hooks/UseGenres";
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
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY='5px'>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={genre.image_background}
              />
              <Button fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} onClick={()=>onSelectGenre(genre)} fontSize='lg' variant='link'>{genre.name}</Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default GenreList;
