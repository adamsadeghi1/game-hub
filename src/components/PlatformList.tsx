import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatforms";
import { Platform } from "../services/platformService";

interface Props {
  onSelectedPlatfome: (platformId?: number) => void;
  selectedPlatformId?: number;
}

const PlatformList = ({ onSelectedPlatfome, selectedPlatformId }: Props) => {
  const { data, error } = usePlatform();
  const selectedPlatform = data.find((p) => p.id === selectedPlatformId);
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform ? selectedPlatform.name : "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => onSelectedPlatfome(platform.id)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformList;
