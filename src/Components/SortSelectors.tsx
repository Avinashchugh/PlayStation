import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelectors = () => {
  return (
    <div>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          OrderBy: relevance
        </MenuButton>
        <MenuList>
         <MenuItem>item1</MenuItem>
         <MenuItem>item2</MenuItem>
         <MenuItem>item3</MenuItem>
         <MenuItem>item4</MenuItem>
         <MenuItem>item5</MenuItem>
         <MenuItem>item6</MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default SortSelectors;
