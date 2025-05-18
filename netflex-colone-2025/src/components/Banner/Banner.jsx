// import React from 'react'
import React, { useEffect,useState } from 'react';
import axios from '../../utils/axios';
import requests from '../../utils/requset'

import './Banner.css'
// import "./Banner.css"
const Banner = () => {
    const [movies, setMovie] = useState([]);
    
    useEffect(() => {
      (async () => {
        try {
          const respond = await axios.get(requests.fetchNetflixOriginals);
          const randomMovies = respond.data.results[Math.floor(Math.random() *respond.data.results.length)];
          console.log(requests);
          setMovie(randomMovies);
            // request.data.results[
            //   Math.floor(Math.random() *request.data.results.length)
            // ]
          // );
          // const [movie, setMovie] = useState([]);
        } catch (error) {
          console.log("error", error);
        }
      })();
    }, []);
  function truncate(str, n) {
      return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

  return (<div
    className="banner"
    style={{
      backgroundSize: "cover",
      backgroundImage: `url('https://image.tmdb.org/t/p/original/${movies?.backdrop_path}')`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    <div className="banner_contents">
      <h1 className="banner_title">
        {movies?.title || movies?.name || movies?.original_name}
      </h1>
      <div className="banner_buttons">
        <button className="banner_button play">Play</button>
        <button className="banner_button">My List</button>
      </div>
      <h1 className="banner_description">{truncate(movies?.overview, 150)}</h1>
    </div>
  </div>
);
};

    
export default Banner