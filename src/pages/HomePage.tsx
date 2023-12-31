import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GenreList from "../components/GenreList";
import PageHeading from "../components/PageHeading";
import PlatformList from "../components/PlatformList";
import SortSelector from "../components/SortSelector";

const HomePage = () => {
  return (
    <Grid
      gridTemplate={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      gridTemplateColumns={{
        base: `1fr`,
        lg: `200px 1fr`,
      }}
    >
      <Show above="lg">
        <GridItem area="aside" padding={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box padding={2}>
          <PageHeading />
          <HStack spacing={2} marginBottom={4}>
            <PlatformList />
            <SortSelector />
          </HStack>
        </Box>

        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
