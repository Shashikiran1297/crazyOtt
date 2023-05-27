import {useEffect, useState} from'react';
import { Link } from "react-router-dom";

const NavBar = () => {

   
    let[searchword , setSearchword] = useState("");
    let [moviename,setmovies]=useState([])
    let [menu,setmenu]=useState(false)

    useEffect(()=>{
        fetch("http://localhost:4000/movies")
        .then((res)=>{return res.json()})
        .then((data)=>{
           let names=data.map((m)=>{return {moviename:m.moviename,id:m.id}})
           let filteredNames=names.filter((movie)=>{return movie.moviename.toLowerCase().includes(searchword.toLowerCase())})
           setmovies(filteredNames)
        })
    },[searchword])
    return ( 
        <nav>
            <div id="logo">
               <Link to="/"><h1> 🎥CrazyMovies </h1></Link>  
            </div>
            <div id="search-bar">
                 <input type="search" placeholder="Search For movies" value={searchword} 
                 onChange={(e)=>{setSearchword(e.target.value);}} />
           <Link to={`/search/${searchword}`}> 
            {/*<button onClick={(()=>{setSearchword("")})}>Search</button> </Link>*/}
            <button >Search</button> </Link> 
            </div>
            <div id="add-movie">
                   <Link to="/fav">Favorites</Link>
                  <Link to="/addmovie"> Add movie </Link>
                  <Link to="/signup" >Signup</Link>
            </div>
            <div id='hamberger'>
             <span onClick={()=>{setmenu(!menu)}}>
             { menu==false ?
               <i class='bx bx-menu'></i>:
               <i class='bx bx-menu-alt-right'></i>
                 }
               </span>
            {menu && <div id="menu">
                  <Link to="/fav">Favorites</Link>
                  <Link to="/addmovie"> Add movie </Link>
                  <Link to="/signup" >Signup</Link>
            </div>}
            </div>
            <div className='suggestionBox'>
                 {
                    searchword!="" && <ul>
                                             {moviename.map((movie)=>{
                                                //  return  <li onClick={((e)=>{
                                                //    setSearchword(e.target.innerText)
                                                //  })}>{m}</li>
                                                return( <Link to={`/moviedetails/${movie.id}`}>
                                                               <li onClick={(()=>{setSearchword("")})}>{movie.moviename}</li>
                                                       </Link> )
                                             }) }        
                                       </ul>
                 }
            </div>
        </nav>
     );
}
export default NavBar;