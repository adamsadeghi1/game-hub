import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store";

const SortSelector = () => {
  const setSortOrder = useGameQueryStore((s) => s.setSortOrder);
  const sortOrder = useGameQueryStore((s) => s.gameQuery.ordering);

  const orderby = [
    { value: "", label: "Relevance" },
    { value: "name", label: "Name" },
    { value: "added", label: "Date Added" },
    { value: "-released", label: "Released Date" },
    { value: "-rating", label: "Rating" },
  ];
  const currectSort = orderby.find((item) => item.value === sortOrder);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currectSort ? currectSort.label : "Relevance"}
      </MenuButton>
      <MenuList>
        {orderby.map((sort) => (
          <MenuItem
            key={sort.value}
            value={sort.value}
            onClick={() => setSortOrder(sort.value)}
          >
            {sort.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
