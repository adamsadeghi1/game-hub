import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import gameService, { GameFinalResult } from "../services/gameService";
import useGameQueryStore from "../store";
  
const useGame = () =>{
    const gameQuery = useGameQueryStore(s=> s.gameQuery);
    return useInfiniteQuery<GameFinalResult,Error>({
        queryKey: ["games", gameQuery],
        queryFn: ({pageParam=1})=> gameService.get({
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


export default useGame;