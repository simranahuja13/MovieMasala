import React from 'react'
import Navbar from './Components/Navbar'
import SearchBar from './Components/SearchBar'
import MovieCard from './Components/MovieCard'
import { useState } from 'react'

const App = () => {
  const [allMovieData, setAllMovieData] = useState([]);
  const [searchMovie, setSearchMovie] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchMovieData = async () => {
    try {
      setLoading(true);// display when loading...
      const response =   await fetch(`https://omdbapi.com/?s=${searchMovie}&apikey=a1de9591`);
      // (`https://omdbapi.com/?s=${searchMovie}&apikey=a1de9591`);
      // (`http://img.omdbapi.com/?apikey=2145858&s=${searchMovie}`)
      
     
      
      const data = await response.json();
      console.log(data); 
      setAllMovieData(data.Search);
      setLoading(false);
    }
    catch (error) {
      console.log(error);
      setLoading(false);
    }
  }
 
  return (
    <>
      <Navbar />
      <div className="bg">
        <SearchBar
          searchMovie={searchMovie}
          setSearchMovie={setSearchMovie}
          fetchMovieData={fetchMovieData}
        />
        <MovieCard
          allMovieData={allMovieData}
          loading={loading}
        />
      </div>

    </>
  )
}

export default App