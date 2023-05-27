import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MovieList = ({movies,title}) => {

    let[favid,setfavid]=useState([]);
    let[altered,setaltered]=useState(0);

    useEffect(()=>{
      let fav = JSON.parse(localStorage.getItem("fav"));
        setfavid(fav.map((m)=>{return m.id}));
    },[altered])

    let addFav = (movie)=>{
        let fav = JSON.parse(localStorage.getItem("fav"));
        fav.push(movie);
        fav = JSON.stringify(fav);
        localStorage.setItem("fav" , fav);
        // alert("movie added to favorites list")
        setaltered(altered+1)
      }
    let removeFav=(id)=>{
      let fav=JSON.parse(localStorage.getItem("fav"));
     fav= fav.filter((m)=>{return m.id!=id});
      localStorage.setItem("fav",JSON.stringify(fav));
      // alert("Movie removed from favorites")
      setaltered(altered+1)   
    }    
    return ( 
        <div>
            <h1 id="title">{title}</h1>             
              <div className="all-movies">
                              {movies.map((movie)=>{ 
                                 return(
                                     <div className="movie12">
                                       {favid.includes(movie.id) ?
                                          <button id="add-btn" onClick={()=>{removeFav(movie.id)}}>🧡</button>:
                                        <button id="remove-btn" onClick={()=>{addFav(movie)}}>🖤  </button>}
                                         {/* {heart==false ? <span><i class='bx bx-heart'></i></span> : <span><i class='bx bxs-heart' style='color:#da1d1d' ></i></span>} */}
                                         {/* <Link to= "/mo viedetails"> */}
                                         <Link to={`/moviedetails/${movie.id}`}>
                                         <img src= {movie.poster} width="350px" height="400px" />
                                         <h1>Poster : {movie.moviename}</h1>                                             
                                         </Link>
                                     </div>
                                 )
                             })}
              </div>
        </div>
     );
}
export default MovieList;
