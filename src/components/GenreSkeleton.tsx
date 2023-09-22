import {
  HStack,
  List,
  ListItem,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";
import React from "react";

const GenreSkeleton = () => {
  return (
    <List>
      <ListItem paddingY="5px">
        <HStack>
          <SkeletonCircle boxSize="32px" />
          <SkeletonText />
        </HStack>
      </ListItem>
    </List>
  );
};

export default GenreSkeleton;
