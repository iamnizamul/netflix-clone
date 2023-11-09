import React, { useEffect, useState } from 'react';
import { API_KEY, imageUrl } from '../../Constants/Constants.js'
import axios from '../../axios.js';
import './Banner.css';

function Banner() {
  const [movie, setMovie] = useState()
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
      // setRandomMovieIndex(Math.random() * 19)
      console.log(response.data.results[2])
      setMovie(response.data.results[2])
    })
  
    return () => {
      
    }
  }, [])
  
  return (
    <div 
    className='banner'
    style={{backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ''})`}}>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title : ''}</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <h1 className='description'>{movie ? movie.overview : ''}</h1>
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner