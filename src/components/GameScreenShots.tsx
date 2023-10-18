import React from "react";
import useScreenShots from "../hooks/useScreenShots";
import { Image, SimpleGrid } from "@chakra-ui/react";

interface Props {
  gameId: number;
}
const GameScreenShots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenShots(gameId);

  if (isLoading) return null;
  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {data?.map((file) => (
        <Image src={file.image} key={file.id} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenShots;
