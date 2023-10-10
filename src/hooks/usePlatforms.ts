import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import platforms from "../data/platforms";
import platformService from "../services/platformService";

const usePlatforms = () => useQuery({
    queryKey: ["platforms"],
    queryFn: platformService.getAll,
    staleTime: ms('10m'),
    initialData: platforms
});

export default usePlatforms;