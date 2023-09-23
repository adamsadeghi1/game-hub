import {
  Button,
  HStack,
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
}

const GenreList = ({ onSelectedGenre }: Props) => {
  const { data, isLoading, err } = useGenre();
  const skeleton = [1, 2, 3, 4, 5, 6];

  if (err) return null;
  // if (isLoading) return <Spinner />;
  return (
    <>
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
                />
                <Button
                  fontSize="lg"
                  variant="link"
                  onClick={() => onSelectedGenre(genre)}
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
