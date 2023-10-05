import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}
const PageHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenre();
  const { data: platforms } = usePlatform();

  const genre = genres.find((g) => g.id === gameQuery.genreId);
  const platform = platforms.find((p) => p.id === gameQuery.platformId);
  const heading = `${genre?.name || ""} 
                    ${platform?.name || ""}
                     Game`;
  return (
    <Heading as="h1" fontSize="5xl" marginBottom={4}>
      {heading}
    </Heading>
  );
};

export default PageHeading;
