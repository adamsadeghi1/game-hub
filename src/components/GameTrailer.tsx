import useTrailer from "../hooks/useTrailer";

interface Props {
  gameId: string | number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data: trailer, isLoading, error } = useTrailer(gameId);
  debugger;
  if (isLoading) return null;
  if (error) throw error;

  return trailer?.data ? (
    <video src={trailer.data[480]} poster={trailer.preview} controls />
  ) : null;
};

export default GameTrailer;
