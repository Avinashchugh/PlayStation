import { useEffect, useState } from "react";
import apiClient from "../Services/api-client";
import { CanceledError } from "axios";
export interface platform{
  id: number;
  name: string;
  slug: string;
}
export interface Game {
    id: number;
    name: string;
    background_image:string; 
    parent_platforms:{platform: platform}[];
    metacritic: number;

  }
  interface FetchGameResponse {
    count: number;
    results: Game[];
  }
const UseGame = () =>{
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
    const [isLoading , setLoading] = useState(false);
  
    useEffect(() => {
        const controller = new AbortController();
      setLoading(true);  
      apiClient
        .get<FetchGameResponse>("./games",{signal: controller.signal})
        .then((res) => {

          setGames(res.data.results);
          setLoading(false);
        })
        .catch((err) => {
            if(err instanceof CanceledError) return;
            setError(err.message)});
            setLoading(false);
        return () => controller.abort();
    }, []);
    return {games,error, isLoading};
}

export default UseGame