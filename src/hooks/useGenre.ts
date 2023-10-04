import genres from "../data/genres";
import genreService from "../services/genreService";
import { useQuery } from "@tanstack/react-query";



const useGenre = () => {
    return useQuery({
        queryKey: ["genres"],
        queryFn: genreService.getAll,
        staleTime: 10 * 60 * 1000, //10m
        initialData: genres
    });
}

export default useGenre;