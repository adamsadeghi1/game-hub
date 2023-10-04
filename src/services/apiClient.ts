import axios, { AxiosRequestConfig } from "axios";


const axiosInstance = axios.create({
    baseURL:'http://10.0.0.171:3001/api/',
});

class APIClient<T> {
    endpoint : string;
    constructor(endpoint:string){
        this.endpoint =endpoint;
    }

    getAll= (requestconfig?: AxiosRequestConfig)=>{
       return axiosInstance.get<T[]>(this.endpoint,requestconfig).then(res=>res.data);
    }

    post = (data:T,requestconfig?: AxiosRequestConfig)=>{
        return axiosInstance.post<T>(this.endpoint, data,requestconfig)
        .then(res=>res.data)
    }
}

export default APIClient;