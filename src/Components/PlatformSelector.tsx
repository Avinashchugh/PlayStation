import { Menu, Button, MenuButton,MenuList,MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import { platform } from "../hooks/UseGames";
interface props{
  onSelectPlatform:(platform:platform)=>void;
  selectedPlatform: platform | null;
}
const PlatformSelector = ({onSelectPlatform ,selectedPlatform}:props) => {
    const {data,error} =usePlatform();
    if(error)return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown/>}>{selectedPlatform?.name||'Platforms'}</MenuButton>
      <MenuList>
      {data.map(platform => <MenuItem onClick={()=>onSelectPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>)}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
