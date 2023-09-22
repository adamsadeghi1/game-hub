import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import getCropedImageUrl from "../services/imageUrl";
import GenreSkeleton from "./GenreSkeleton";

const GenreList = () => {
  const { data, isLoading, err } = useGenre();
  const skeleton = [1, 2, 3, 4, 5, 6];

  if (err) return null;
  // if (isLoading) return <Spinner />;
  return (
    <>
      {isLoading && skeleton.map((item) => <GenreSkeleton key={item} />)}
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                src={getCropedImageUrl(genre.image_background)}
                boxSize="32px"
                borderRadius={8}
              />
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
