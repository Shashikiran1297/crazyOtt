import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const AddMovie = () => {

    let navigate = useNavigate()

    let moviename = useRef();
    let hero = useRef();
    let heroine = useRef();
    let director = useRef();
    let genre = useRef();
    let yor = useRef();
    let rating = useRef();
    let poster = useRef();
    let trailer = useRef();
    let synopsis = useRef();


let  handleAddMovie=(e)=>{
  e.preventDefault();
   // Create a new movie object
   
  let newMovie = {
    moviename: moviename.current.value,
    hero: hero.current.value,
    heroine: heroine.current.value,
    director: director.current.value,
    genre: genre.current.value,
    poster: poster.current.value,
    trailer: trailer.current.value,
    release: yor.current.value,
    rating: rating.current.value,
    synopsis : synopsis.current.value,
    languages : []
  };
  let options=document.getElementByName("languages");

    for(let i = 0; i < options.length; i++) 
    {
        if(options[i].checked==true)
        {
            newMovie.languages.push( options[i].value )
        }  
    } 

  console.log(newMovie);
 //and whatever we created we submit to the data base
  fetch("http://localhost:4000/movies" , 
  {
      method : "POST" ,
      headers : {"Content-Type" : "application/json"},
      body : JSON.stringify(newMovie)
  } 
  )
  .then(()=>{
      alert("new data added");
    //   window.location.reload();
       navigate("/");
  })
}
    return (
        <div className="add_movies">
            <h1>Add new Movie</h1>
            <form action="" onSubmit={handleAddMovie}>
                <input type="text" placeholder="Movie name" id="movie"  ref={moviename} /><br />
                <input type="text" placeholder="Hero name" id="movie" ref={hero} /><br />
                <input type="text" placeholder="Heroien name" id="movie" ref={heroine} /><br />
                <input type="text" placeholder="Director name" id="movie" ref={director}/><br />
                <fieldset id="languages">
                    <legend>Add Languages</legend>
                    <input type="checkbox" name="languages" id="ka" value="Kannada" /><label htmlFor="ka">Kannada</label>
                    <input type="checkbox" name="languages" id="ta" value="Tamil" /><label htmlFor="ta">Tamil</label>
                    <input type="checkbox" name="languages" id="te" value="Telugu" /><label htmlFor="te">Telugu</label>
                    <input type="checkbox" name="languages" id="en" value="English" /><label htmlFor="en">English</label>
                    <input type="checkbox" name="languages" id="ma" value="Malayalm" /><label htmlFor="ma">Malayalm</label>
                </fieldset>
                <input type="text" placeholder="Genre" ref={genre} />
                <input type="url" name="" id="image" placeholder="Add image address" ref={poster} /><br />
                <input type="url" name="" id="vedio" placeholder="Add vedio address" ref={trailer} /><br />
                <input type="number" min={1950} max={2023}  ref={yor} placeholder="yor" /><br />
                <input type="number" step={0.1} min={1} max={10} ref={rating} placeholder="rating" /><br />
                <textarea name="" id="synopsis" cols="30" rows="10" ref={synopsis}></textarea><br />
                <input type="submit" value='Add Movie'  />
            </form>
        </div>
    ) 
}

export default AddMovie;