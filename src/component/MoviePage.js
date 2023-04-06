import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'
import { PAGE_PATH } from "../utils/cosntant";

const MoviePage = () => {
  const [movie, setMovie] = useState([]);

  const api_url = "https://api.themoviedb.org/3/movie/popular?api_key=234d0182f14614f887c6921cf88eebd9"
  const movie_api_img = "https://image.tmdb.org/t/p/w500/"

  const fetchMovie = async () => {
    try {
      const getMovie = await axios.get(api_url)
      setMovie(getMovie.data.results)
    } catch (error) {
      console.log("api_err", error);
    }
  }
  useEffect(() => {
    fetchMovie()
  }, [])

  return (
    <div className="container">
      <div className="header_fix_btn">
        <Link to={PAGE_PATH.COMPINFO}>
          <button className="mb-5 btn btn-primary mt-2 ">company Info</button>
        </Link>
      </div>
      <div className="row mt-5">
      <h1 className="text-white text-center">List of Movies</h1>
        {movie && movie.length > 0 ? movie.map((item) => (
          <div className="col-sm-12 col-md-6 col-lg-3 mt-4">
            <div className="card text-left">
              <img className="card-img-top" src={movie_api_img + item.backdrop_path} alt="movie_img" width={100} height={190} />
              <div className="card-body">
                <h4 className="fs-6">Title:{item.original_title}</h4>
                <div className="my-2">
                  <span className="fw-bold">Release Date:{item.release_date}</span>
                </div>
                <p className="fs-6" >Overview{item.overview.slice(0, 92)}</p>
              </div>
            </div>
          </div>
        )) : <span>movie not found</span>}
      </div>
    </div>
  );
};
export default MoviePage;

