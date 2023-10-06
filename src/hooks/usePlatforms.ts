import { useQuery } from "@tanstack/react-query";
import platformService, { Platform } from "../services/platformService";
import platforms from "../data/platforms";
import ms from "ms";

const usePlatforms = () => useQuery({
    queryKey: ["platforms"],
    queryFn: platformService.getAll,
    staleTime: ms('10m'),
    initialData: platforms
});

export default usePlatforms;