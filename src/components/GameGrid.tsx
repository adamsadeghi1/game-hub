import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame, { Platform } from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenre";
import { GameQuery } from "../App";

interface Props {
  gameQury: GameQuery;
}

const GameGrid = ({ gameQury }: Props) => {
  const { data, err, isLoading } = useGame(gameQury);
  const skeleton = [1, 2, 3, 4, 5, 6];

  if (err) return <Text>{err}</Text>;
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={6}
      padding={2}
    >
      {isLoading &&
        skeleton.map((item) => (
          <GameCardContainer key={item}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      {!isLoading &&
        data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
    </SimpleGrid>
  );
};

export default GameGrid;
