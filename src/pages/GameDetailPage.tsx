import { Box, Button, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import useGame from "../hooks/useGame";
import GameAttribute from "../components/GameAttribute";
import GameTrailer from "../components/GameTrailer";
import GameScreenShots from "../components/GameScreenShots";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  const navigator = useNavigate();

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <>
      <Box paddingLeft={5}>
        <Heading>{game.name}</Heading>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <Button
          colorScheme="gray"
          variant="solid"
          onClick={() => navigator("/")}
          marginY={3}
        >
          Back to Main
        </Button>
        <GameAttribute game={game} />
        <GameTrailer gameId={game.id} />
        <GameScreenShots gameId={game.id} />
        <SimpleGrid columns={{ sm: 1, md: 2 }}></SimpleGrid>
      </Box>
    </>
  );
};

export default GameDetailPage;
