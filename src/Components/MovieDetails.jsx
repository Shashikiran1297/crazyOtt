import { useState ,useEffect} from "react";
import { useParams } from "react-router-dom";
import RelaventMovies from "./RelaventMovies";
import { useNavigate } from "react-router-dom";

const MovieDetails = () => {
    let {id}=useParams();
    let navigate=useNavigate();
    let[movie, setmovie] = useState(null);
    let [error, setError] = useState(null);
    let [pending, setPending] = useState(true);

    useEffect(() => {
      setmovie(null)
      setPending(true)
        setTimeout(() => {
          fetch("http://localhost:4000/movies/" + id)
            .then((res) => {
              return res.json();
            })
            .then((data) => {
              console.log(data);
              setmovie(data);
              setPending(false);
            })
            .catch((err) => {
              setError("404 Network issue !!! please try again later");
              setPending(false);
            });
        }, 3000);
      }, [id]);
    
      let deleteMovie=()=>{
        fetch("http://localhost:4000/movies/" + id,{method: "DELETE"})
        .then(()=>{navigate("/")})
      }

    return ( 
        <div className="movDtls">
             {pending==true && <h1>Loading</h1>}
             {error!=null && <h1>Not fetching</h1>}             
             {movie && <div>
              <img src={movie.poster} />
              <h1>{movie.moviename}</h1>
              <h1>{movie.director}</h1> 
              <p>Genre :{movie.genre}</p>
              <h4>Story Line</h4>
              <button onClick={deleteMovie}>Delete</button>
              <button>Edit</button>
              <p>{movie.synopsis}</p> 
              <iframe width="560" height="315" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 
              </div> }   
              {movie && <RelaventMovies  genre={movie.genre} />}
        </div>
     );
}
 
export default MovieDetails;