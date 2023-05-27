 import { useState,useEffect } from "react";
import MovieList from "./MovieList";


const Home = () => {
   let[movies, setmovies] = useState(null);
   let [error , setError] = useState(null);
   let [pending , setPending] = useState(true);
   useEffect(()=>{
 
    if( localStorage.getItem("fav")==null )
    {
        localStorage.setItem("fav" , "[]")
    }

       setTimeout(()=>{
           fetch("http://localhost:4000/movies")

           .then((res)=>{return res.json()})
           .then((data)=>{
               console.log(data);
               setmovies(data);
               setPending(false);
           })
           .catch((err)=>{
            setError("could not load");
            setPending(false)
        })
       } , 1200)
   } , [])
    return ( 
      <div className="home">   
      {pending && <h1>Loading.......</h1>} 
      
      {error && <h1> {error} </h1>}

      {movies && <MovieList movies={movies} title="All movies"/>}
      {movies && <MovieList movies={movies} title="Horror Movies"/>}
      {movies && <MovieList movies={movies} title="Favrouite movie"/>}
      {movies && <MovieList movies={movies.filter((m)=>{return m.genre.includes("action")})} title="Action Movies"/> }
      {movies && <MovieList movies={movies.filter((n)=>{return n.hero.includes("Punith")})} title="Punith Rajkumar Hits" />} 
      </div> 
     );
}
export default Home; 
