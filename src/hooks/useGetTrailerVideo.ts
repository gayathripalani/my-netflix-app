import React, { useEffect } from 'react'
import { addTrailerVideo } from '../utils/movieSlice';
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';

const useGetTrailerVideo = ({ movieId }) => {
    const dispatch = useDispatch();
    const getMovieVideos = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/" +
              movieId +
              "/videos?language=en-US",
            API_OPTIONS
          );
        const json = await data.json();
        const filterData = json.results.filter((video) => video.type === 'trailer');
        dispatch(addTrailerVideo(filterData?.[0] ?? json.results[0]));

    }
    useEffect(()=> {
        getMovieVideos();
    }, [])
}

export default useGetTrailerVideo;

