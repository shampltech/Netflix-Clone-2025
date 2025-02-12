import React, { useEffect, useState } from 'react'
import axios from '../../../Utils/axios'
import './Row.css'
import movieTrailer from 'movie-trailer'
import YouTube from 'react-youtube'

    const Row =({title,fetchUrl,isLargeRow})=>{
        const [movies, setMovie]=useState([])
        const [trailerUrl,setTrailerUrl] = useState("")
        const base_url = "https://image.tmdb.org/t/p/original";
        useEffect(() => {
          (async () => {
            try {
              console.log(fetchUrl)
              const request = await axios.get(fetchUrl);
              // console.log(request)
              setMovie(request.data.results);
             
            } catch (error) {
              console.log("error", error);
            }
          })();
        }, [fetchUrl]);
        // console.log(movies)
        
        const  handleClick= (movie)=>{
          if (trailerUrl) {
            setTrailerUrl('')
          }
          else{
            movieTrailer(movie?.title || movie?.name || movie?.original_name)
            .then((url)=>{
              // console.log(url)
              const urlParams=new URLSearchParams(new URL(url).search)
              // console.log(urlParams.get('v'))
              setTrailerUrl(urlParams.get('v'))
            })
          }
        }
    //  console.log(movies);

    const opts={
      width:"100%",
      height: "390",
      playerVars :{
        autoplay:1,
      }
    }
  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row-posters">
        {movies?.map((movie, index) => (
          <img
            onClick={() => handleClick(movie)}
            key={index}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            className={`row-poster ${isLargeRow && "row-poster-large"}`}
          />
        ))}
      </div>
      <div>
        {trailerUrl && (
          <YouTube
            style={{
              padding: "40px",
            }}
            videoId={trailerUrl}
            opts={opts}
          />
        )}
      </div>
    </div>
  );
}

export default Row
