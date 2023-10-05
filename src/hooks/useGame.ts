import { useInfiniteQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import gameService, { GameFinalResult } from "../services/gameService";
  
const useGame = (gameQuery: GameQuery) => useInfiniteQuery<GameFinalResult,Error>({
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
   staleTime: 5 * 60 * 1000, //5m
   getNextPageParam: (lastpage,allPages)=>{
       return lastpage.next ? allPages.length + 1 : undefined;
   }
}) 

export default useGame;