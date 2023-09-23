import { AxiosRequestConfig, CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

const useData = <T>(endpoint: string, requestconfig?: AxiosRequestConfig, dependency?: any[]) =>{
    const [data, setData] = useState<T[]>([]);
    const [err, setErr] = useState("");
    const [isLoading, setIsLoading]= useState(false);
  
    useEffect(() => {
      const controller = new AbortController();

      setIsLoading(true);
      apiClient
        .get<T[]>(endpoint,{signal:controller.signal, ...requestconfig})
        .then((res) => {
         setData(res.data);
          setIsLoading(false);
        })
        .catch((err) => {
            if (err instanceof CanceledError) return;
            setErr(err.message);
            setIsLoading(false);
        });

      return ()=> controller.abort();
    }, dependency ? [...dependency]: []);

    return {data, err, isLoading};
}

export default useData;