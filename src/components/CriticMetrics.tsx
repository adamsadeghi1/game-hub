import { Badge } from "@chakra-ui/react";

interface Prop {
  score: number;
}

const CriticMetrics = ({ score }: Prop) => {
  const color =
    score > 75 ? "green" : score > 60 && score <= 75 ? "yellow" : "";
  return (
    <Badge colorScheme={color} paddingX={2} borderRadius="4px">
      {score}
    </Badge>
  );
};

export default CriticMetrics;
