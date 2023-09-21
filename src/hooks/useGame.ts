import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform{
  id: number,
  name: string,
  slug: string
}

export interface Game {
    id: number;
    name: string;
    background_image: string,
    parent_platforms :Platform[],
    metacritic: number
  }
  
  interface GetGameResponse {
    count: number;
    results: Game[];
  }
  
const useGame = () =>{
    const [games, setGames] = useState<Game[]>([]);
    const [err, setErr] = useState("");
  
    useEffect(() => {
      const controller = new AbortController();
      apiClient
        .get<Game[]>("/games",{signal:controller.signal})
        .then((res) => setGames(res.data))
        .catch((err) => {
            if (err instanceof CanceledError) return;
            setErr(err.message);
        });

      return ()=> controller.abort();
    }, []);

    return {games, err};
}

export default useGame;