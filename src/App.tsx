import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PageHeading from "./components/PageHeading";
import PlatformList from "./components/PlatformList";
import SortSelector from "./components/SortSelector";
import { Platform } from "./services/platformService";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
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
            selectedGenreId={gameQuery.genreId}
            onSelectedGenre={(genreId) =>
              setGameQuery({ ...gameQuery, genreId })
            }
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box padding={2}>
          <PageHeading gameQuery={gameQuery} />
          <HStack spacing={2} marginBottom={4}>
            <PlatformList
              selectedPlatformId={gameQuery.platformId}
              onSelectedPlatform={(platformId) =>
                setGameQuery({ ...gameQuery, platformId })
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
