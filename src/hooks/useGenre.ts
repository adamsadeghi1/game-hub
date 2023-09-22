import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Genre{
    id: number,
    name:string,
    slug: string,	
    games_count:number,	
    image_background: string
}

const useGenre = () =>{
    const [genres, setGenres] = useState<Genre[]>([]);
    const [err, setErr] = useState("");
    const [isLoading, setIsLoading]= useState(false);
  
    useEffect(() => {
      const controller = new AbortController();

      setIsLoading(true);
      apiClient
        .get<Genre[]>("/genres",{signal:controller.signal})
        .then((res) => {
          setGenres(res.data);
          setIsLoading(false);
        })
        .catch((err) => {
            if (err instanceof CanceledError) return;
            setErr(err.message);
            setIsLoading(false);
        });

      return ()=> controller.abort();
    }, []);

    return {genres, err, isLoading};
}

export default useGenre;