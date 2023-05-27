import AddMovie from './Components/AddMovie';
import Home from './Components/Home';
import MovieDetails from './Components/MovieDetails';
import NavBar from './Components/NavBar';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Signup from './Components/Signup';
import Favorites from './Components/Favorites';
import Search from './Components/Search';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <NavBar/>
      <Routes>
         {/* 
         <Home/> */}
        <Route path="/" element={<Home/>}/>
        <Route path="/addmovie" element={<AddMovie/>}/>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/moviedetails/:id" element={<MovieDetails/>}/> 
        <Route path="/fav" element={<Favorites/>}/>
        <Route path="/search/:searchword" element={<Search/>}/>
      </Routes>
    </div> 
    </BrowserRouter>
  );
}
export default App;
 