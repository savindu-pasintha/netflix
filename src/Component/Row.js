import React, { useState, useEffect } from 'react';
import axios from '../TMDB_API/Axios';
import "./Row.css";

const img_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchData();
    }, [fetchUrl]);

    const fetchData = async () => {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
      //  console.log(request.data.results);
    }

    return (
        <div >
            <div className="title">
              <h2  style={{ color: "white", fontSize: "40px", textAlign:"left",padding:"10px" }}>{title}</h2>
            </div>
            <div className="row_poster">
                    {
                        movies.map(film => {
                            if (film.poster_path !== null) {
                                return (
                                    <div className="row_posters" key={film.id}>
                                      <img  src={img_url + film.poster_path} alt={film.name} width="200px" />
                                    </div>
                                )
                            }
                        })
                    }
            </div>



        </div>
    );
};

export default Row;








