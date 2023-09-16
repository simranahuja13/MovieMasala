import React from "react";
//props received
const SearchBar=({searchMovie , setSearchMovie , fetchMovieData})=>{
return(
<div className="main flex justify-center py-5 px-4">
    <input type="text" 
    placeholder="Search any movie" 
    value={searchMovie}
    //change value not reflected
    onChange={(e)=>{
        setSearchMovie(e.target.value);
    }}
    className="bg-gray-200 rounded-l-lg placeholder-gray-400 px-2 py-2 outline-none border-2 border-gray-500 text-black w-80"/>
    <button onClick={fetchMovieData}
    className="bg-violet-950 shadow-md px-4 text-white rounded-r-lg border-b-2 border-r-2 border-t-2 border-gray-500">
        Search
        </button>
</div>
);
}
export default  SearchBar;