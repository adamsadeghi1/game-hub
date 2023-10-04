import { GameQuery } from "../App";
import { Platform } from "../services/platformService";
import useData from "./useData";




export interface Game {
    id: number;
    name: string;
    background_image: string,
    parent_platforms :Platform[],
    metacritic: number,
    rating_top: number
  }
  
  
const useGame = (gameQuery: GameQuery) => useData<Game>("/games",{
  params:{
    genres:gameQuery.genre?.id,
    platforms:gameQuery.platform?.id,
    ordering: gameQuery.ordering,
    search: gameQuery.searchText
  }
},[gameQuery]);

export default useGame;