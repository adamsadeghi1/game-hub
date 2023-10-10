import APIClient from "./apiClient";
import { Platform } from "./platformService";

export interface Game {
    id: number;
    slug: string;
    name: string;
    description_raw: string;
    background_image: string;
    parent_platforms :Platform[],
    metacritic: number,
    rating_top: number
  }
export interface GameFinalResult{
  next: string| null;
  results: Game[]
}
  
export default new APIClient<GameFinalResult>("/games");