import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
interface props{
  onSearch: (searchText:string)=>void;
}
const SearchInput = ({onSearch}: props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <div>
      <form onSubmit={(e) =>{
        e.preventDefault();
        if(ref.current) onSearch(ref.current.value)
      }}>
        <InputGroup>
          <InputLeftElement children={<BsSearch />} />
          <Input ref={ref}
            borderRadius={20}
            placeholder="Search games"
            variant="filled"
          ></Input>
        </InputGroup>
      </form>
    </div>
  );
};

export default SearchInput;
