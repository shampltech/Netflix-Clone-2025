import React, { useEffect, useState } from 'react'
import axios from "../../Utils/axios"
import requests from "../../Utils/requests"
import './Banner.css'

function Banner() {
    const [movie,setMovie]=useState({})
    useEffect(()=>{
        (async ()=>{
            try {
                const request = await axios.get(requests.fetchNetflixOriginals)
                // console.log(request)
                setMovie(request.data.results[Math.floor(Math.random()*request.data.results.length)])
            } catch (error) {
                console.log("Error", error)
            }
        }) ()
    },[])
    function truncate(str,n) {
        return str?.length >n ? str.substr(0,n-1) + "..." :str;
        
    }
  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
      }}
    >
      
      <div className="banner-contents">
        <h1 className="banner-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner-button">
          <button className="banner-button play">Play</button>
          <button className="banner-button">My List</button>
        </div>
        <h1 className="banner-description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner-fadeButton"></div>
    </div>
  );
}

export default Banner
