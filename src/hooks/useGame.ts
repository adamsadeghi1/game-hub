import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import gameService, { Game } from "../services/gameService";
  
const useGame = (gameQuery: GameQuery) => useQuery<Game[],Error>({
   queryKey: ["games", gameQuery],
   queryFn: ()=> gameService.getAll({
        params:{
            genres:gameQuery.genre?.id,
            parent_platforms:gameQuery.platform?.id,
            ordering: gameQuery.ordering,
            search: gameQuery.searchText
        }
   }),
   staleTime: 5 * 60 * 1000 //5m
}) 

export default useGame;