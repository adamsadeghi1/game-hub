import { Game } from "../entities/Game";
import APIClient from "./apiClient";

export interface GameFinalResult{
  next: string| null;
  results: Game[]
}
  
export default new APIClient<GameFinalResult>("/games");