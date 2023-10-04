import apiClient from "./api-client";

const axiosInstance = apiClient;

class APIClient<T> {
    endpoint : string;
    constructor(endpoint:string){
        this.endpoint =endpoint;
    }

    getAll= ()=>{
       return axiosInstance.get<T[]>(this.endpoint).then(res=>res.data);
    }

    post = (data:T)=>{
        return axiosInstance.post<T>(this.endpoint, data)
        .then(res=>res.data)
    }
}

export default APIClient;