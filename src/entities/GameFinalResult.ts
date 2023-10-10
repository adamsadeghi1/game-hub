import { Game } from "./Game";

export interface GameFinalResult {
  next: string | null;
  results: Game[];
}
