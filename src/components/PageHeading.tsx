import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}
const PageHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.genre?.name || ""} 
                    ${gameQuery.platform?.name || ""}
                     Game`;
  return (
    <Heading as="h1" fontSize="5xl" marginBottom={4}>
      {heading}
    </Heading>
  );
};

export default PageHeading;
