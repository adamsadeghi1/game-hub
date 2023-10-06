import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCropedImageUrl from "../services/imageUrl";
import GenreSkeleton from "./GenreSkeleton";

interface Props {
  onSelectedGenre: (genreId: number) => void;
  selectedGenreId?: number;
}

const GenreList = ({ onSelectedGenre, selectedGenreId }: Props) => {
  const { data, isLoading, error } = useGenres();
  const skeleton = [1, 2, 3, 4, 5, 6];

  if (error) return null;
  // if (isLoading) return <Spinner />;
  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genre
      </Heading>
      {isLoading && skeleton.map((item) => <GenreSkeleton key={item} />)}
      <List>
        {!isLoading &&
          data?.map((genre) => (
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
                  onClick={() => onSelectedGenre(genre.id)}
                  fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
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
