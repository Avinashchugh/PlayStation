import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
interface props{
  onSelectSortOrder: (sortOrder:string)=>void; 
  sortOrder: string;
  sortOrders: string;
}
const SortSelectors = ({onSelectSortOrder, sortOrders}:props) => {
  const sortOrder = [
    { value: " ", label: "Relevance" },
    { value: "-added", label: "Date added " },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];
  const currentSortOrder = sortOrder.find(order => order.value === sortOrders)
  return (
    <div>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          OrderBy: {currentSortOrder?.label || 'Relevance'}
        </MenuButton>
        <MenuList>
         {sortOrder.map(order=><MenuItem onClick={()=> onSelectSortOrder(order.value)} key={order.value} value={order.value}>{order.label}</MenuItem>)}
        </MenuList>
      </Menu>
    </div>
  );
};

export default SortSelectors;
