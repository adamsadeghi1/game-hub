import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import PlatformList from "./components/PlatformList";
import { Platform } from "./hooks/useGame";
import SortSelector from "./components/SortSelector";
import PageHeading from "./components/PageHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  ordering: string | null;
  searchText: string | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      gridTemplate={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      gridTemplateColumns={{
        base: `1fr`,
        lg: `200px 1fr`,
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearchSubmit={(searchText) =>
            setGameQuery({ ...gameQuery, searchText })
          }
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" padding={5}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box padding={2}>
          <PageHeading gameQuery={gameQuery} />
          <HStack spacing={2} marginBottom={4}>
            <PlatformList
              selectedPlatform={gameQuery.platform}
              onSelectedPlatfome={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <SortSelector
              selecedSortOrder={gameQuery.ordering}
              onSortSelected={(ordering) =>
                setGameQuery({ ...gameQuery, ordering })
              }
            />
          </HStack>
        </Box>

        <GameGrid gameQury={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
