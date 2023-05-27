import React, { useEffect, useState } from 'react'
import MovieList from './MovieList';

const RelaventMovies = ({genre}) => {
    let [movies,setMovies]=useState(null);
    // let [error,seterror]=useState(null);
    // let [pending,setpending]=useState(true);
    useEffect(()=>{
            fetch("http://localhost:4000/movies")
            .then((res)=>{return res.json()})
            .then((data)=>{
                setMovies(data)
            })
    },[])
  return (
    <div className='relavant'>
      {movies && <MovieList movies={movies.filter((m)=>{return m.genre.includes(genre)})} 
                title="Relavant Movies" />}
    </div>
  )
}
export default RelaventMovies
