import React,{useState} from 'react';
import "./Search.css";

const Search = () => {
    const[input,setInput] = useState("");
    //https://api.themoviedb.org/3/search/movie?api_key=be81f71bff803ea3ed0cceb7d6be4eb5&query=Jack+Reacher

    return (
        <div>
            <input
            className="search"
            type="text" value={input} onChange={(e)=>{setInput(e.target.value); }}/>
        </div>
    );
}

export default Search;
