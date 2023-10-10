import ms from "ms";
import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import { Game } from "../services/gameService";


const apiClient = new APIClient<Game>('/games')
const useGame =  (slug: string)=> useQuery<Game,Error>({
            queryKey: ["games",slug],
            queryFn: ()=> apiClient.getById(slug),
            staleTime: ms('10m')
})

;

export default useGame;