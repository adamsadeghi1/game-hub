import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSortSelected: (order: string | null) => void;
  selecedSortOrder: string | null;
}

const SortSelector = ({ onSortSelected, selecedSortOrder }: Props) => {
  const orderby = [
    { value: "", label: "Relevance" },
    { value: "name", label: "Name" },
    { value: "added", label: "Date Added" },
    { value: "-released", label: "Released Date" },
    { value: "-rating", label: "Rating" },
  ];
  const currectSort = orderby.find((item) => item.value === selecedSortOrder);
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
            onClick={() => onSortSelected(sort.value)}
          >
            {sort.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
