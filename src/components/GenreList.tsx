import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import getCropedImageUrl from "../services/imageUrl";
import GenreSkeleton from "./GenreSkeleton";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectedGenre, selectedGenre }: Props) => {
  const { data, isLoading, err } = useGenre();
  const skeleton = [1, 2, 3, 4, 5, 6];

  if (err) return null;
  // if (isLoading) return <Spinner />;
  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genre
      </Heading>
      {isLoading && skeleton.map((item) => <GenreSkeleton key={item} />)}
      <List>
        {!isLoading &&
          data.map((genre) => (
            <ListItem key={genre.id} paddingY="5px">
              <HStack>
                <Image
                  src={getCropedImageUrl(genre.image_background)}
                  boxSize="32px"
                  borderRadius={8}
                  objectFit="cover"
                />
                <Button
                  fontSize="lg"
                  variant="link"
                  onClick={() => onSelectedGenre(genre)}
                  fontWeight={
                    genre.id === selectedGenre?.id ? "bold" : "normal"
                  }
                  whiteSpace="normal"
                  textAlign="left"
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          ))}
      </List>
    </>
  );
};

export default GenreList;
