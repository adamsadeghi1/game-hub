import { useQuery } from "@tanstack/react-query";
import platformService, { Platform } from "../services/platformService";
import platforms from "../data/platforms";

const usePlatforms = () => useQuery({
    queryKey: ["platforms"],
    queryFn: platformService.getAll,
    staleTime: 10 * 60 * 1000, //10m
    initialData: platforms
});

export default usePlatforms;