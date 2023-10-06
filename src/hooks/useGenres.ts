import ms from "ms";
import genres from "../data/genres";
import genreService from "../services/genreService";
import { useQuery } from "@tanstack/react-query";


const useGenres = () => useQuery({
                            queryKey: ["genres"],
                            queryFn: genreService.getAll,
                            staleTime: ms('10m'),
                            initialData: genres
                        });

export default useGenres;