import { useQuery } from "@tanstack/react-query";
import ScreenShot from "../entities/ScreenShot"
import APIClient from "../services/apiClient"
import ms from "ms";

const useScreenShots = (gameId:number | string) => {
    const apiClient = new APIClient<ScreenShot>(`games/${gameId}/screenshots`);

    return useQuery({
        queryKey: ["screenShot", gameId],
        queryFn: apiClient.getAll,
        staleTime: ms('10m')
    })
}

export default useScreenShots;