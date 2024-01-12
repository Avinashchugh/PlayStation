import { HStack} from "@chakra-ui/react";
import Logo from "../assets/playstation.png";
import SwitchMode from "./SwitchMode";
import SearchInput from "./SearchInput";
interface props {
  onSearch: (searchText: string) => void;
}
const NavBar = ({ onSearch }: props) => {
  return (
    <div>
      <HStack justifyContent="space-between" padding="10px">
        <img src={Logo} width={50} />
        <SearchInput onSearch={onSearch} />
        <SwitchMode />
      </HStack>
    </div>
  );
};

export default NavBar;
