//useeffect= mudança de estados dos filmes 
//usestate = chamamento da api
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

//css 
import "./MoviesGrid.css";

//chamando url e chave da api
const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

//const filmes da api
const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

//chamamento do conteúdo da api
  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setTopMovies(data.results);
  };

//seleção dos filmes com chave minha chave da api
  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;
    console.log(topRatedUrl);
    getTopRatedMovies(topRatedUrl);
  }, []);

  console.log(topMovies);

  return (
    <div className="container">
      <h2 className="title">TOP FILMES:</h2>
      <div className="movies-container">
        {topMovies.length > 0 &&
          topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Home;

//useState([]) array vazio tenha mais de 1 elemento para a impressão
//= {topMovies.length > 0 &&
