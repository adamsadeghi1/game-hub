import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import { GameFinalResult } from "../entities/GameFinalResult";
import useGameQueryStore from "../store";
import APIClient from "../services/apiClient";
  
const useGames = () =>{
    const apiClient = new APIClient<GameFinalResult>("/games");
    const gameQuery = useGameQueryStore(s=> s.gameQuery);
    
    return useInfiniteQuery<GameFinalResult,Error>({
        queryKey: ["games", gameQuery],
        queryFn: ({pageParam=1})=> apiClient.get({
             params:{
                 genres:gameQuery.genreId,
                 parent_platforms:gameQuery.platformId,
                 ordering: gameQuery.ordering,
                 search: gameQuery.searchText,
                 page: pageParam
             }
        }),
        staleTime: ms('5m'),
        getNextPageParam: (lastpage,allPages)=>{
            return lastpage.next ? allPages.length + 1 : undefined;
        }
     }); 
}


export default useGames;