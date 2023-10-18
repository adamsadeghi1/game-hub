import {  useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import Trailer from "../entities/Trailer";
import ms from "ms";

const useTrailer = (gameId: number| string) => {
    const apiClient = new APIClient<Trailer>(`games/${gameId}/movie`);

    return useQuery({
        queryKey:["trailer",gameId],
        queryFn:  apiClient.get,
        staleTime: ms('10m')
    })
} 

export default useTrailer;
