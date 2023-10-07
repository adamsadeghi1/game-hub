import { Heading } from "@chakra-ui/react";

import useGenre from "../hooks/useGerne";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";

const PageHeading = () => {
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenre(selectedGenreId);

  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatform(selectedPlatformId);

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
