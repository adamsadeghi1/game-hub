import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";
import useGenre from "../hooks/useGerne";
import usePlatform from "../hooks/usePlatform";

interface Props {
  gameQuery: GameQuery;
}
const PageHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();

  const genre = useGenre(gameQuery.genreId);
  const platform = usePlatform(gameQuery.platformId);

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
