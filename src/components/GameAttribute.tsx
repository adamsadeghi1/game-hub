import { SimpleGrid, Text } from "@chakra-ui/react";
import { Game } from "../entities/Game";
import CriticMetrics from "./CriticMetrics";
import DefinitionItem from "./DefinitionItem";

interface Props {
  game: Game;
}
const GameAttribute = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} as="dl">
      <DefinitionItem term="Platform">
        {game.parent_platforms?.map((platfom) => (
          <Text key={platfom.id}>{platfom.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Critics">
        <CriticMetrics score={game.metacritic} />
      </DefinitionItem>
      <DefinitionItem term="Genre">
        {game.genres?.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Publishers">
        {game.publishers?.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default GameAttribute;
