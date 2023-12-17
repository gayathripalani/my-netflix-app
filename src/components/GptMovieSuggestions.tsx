import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const {movieNames, movieResults} = useSelector((state) => state.gpt); 
  if (!movieNames) {
    return null;
  }
  return (
    <div className="p-4 m-4 bg-black text-white">
        <div>
          {movieNames?.map((movieName, index) => (
            <MovieList key={movie} movies={movieResults} title={movie} />
          ))}
         
    </div></div>
  )
}

export default GptMovieSuggestions;