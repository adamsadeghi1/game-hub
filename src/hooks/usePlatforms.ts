import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import platforms from "../data/platforms";
import APIClient from "../services/apiClient";
import { Platform } from "../entities/Platform";

const apiClient = new APIClient<Platform>("/platforms");

const usePlatforms = () => useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms('10m'),
    initialData: platforms
});

export default usePlatforms;