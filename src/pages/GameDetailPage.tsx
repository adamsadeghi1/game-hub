import { Box, Button, Heading, Spinner, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import { useNavigate, useParams } from "react-router-dom";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);
  const navigator = useNavigate();

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <Box paddingLeft={5}>
      <Heading>{game.name}</Heading>
      <Text>{game.description_raw}</Text>
      <Button
        colorScheme="gray"
        variant="solid"
        onClick={() => navigator("/")}
        marginY={3}
      >
        Back to Main
      </Button>
    </Box>
  );
};

export default GameDetailPage;
