import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import { RootState } from "../utils/type";

const GptMovieSuggestions = () => {
  const {movieNames, movieResults} = useSelector((state: RootState) => state.gpt); 
  if (!movieNames || !movieResults) {
    return null;
  }
  return (
    <div className="p-4 m-4 bg-black bg-opacity-90 text-white">
        <div>
          {movieNames?.map((movieName: string, index: number) => (
            <MovieList key={movieName} movies={movieResults[index]} title={movieName} />
          ))}
         
    </div></div>
  )
}

export default GptMovieSuggestions;