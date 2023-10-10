import ms from "ms";
import genres from "../data/genres";
import { useQuery } from "@tanstack/react-query";
import { Genre } from "../entities/Genre";
import APIClient from "../services/apiClient";

const apiClient =  new APIClient<Genre>("/genres");

const useGenres = () => useQuery({
                            queryKey: ["genres"],
                            queryFn: apiClient.getAll,
                            staleTime: ms('10m'),
                            initialData: genres
                        });

export default useGenres;