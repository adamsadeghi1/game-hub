import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}
const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(true);
  const limit = 300;

  if (!children) return null;
  if (children.length < limit) return children;

  const substring = expanded ? children.substring(0, limit) + "..." : children;
  return (
    <>
      <Text>
        {substring}
        <Button
          size="xs"
          fontWeight="bold"
          colorScheme="yellow"
          marginLeft={1}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Show More" : "Show Less"}
        </Button>
      </Text>
    </>
  );
};

export default ExpandableText;
