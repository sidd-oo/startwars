import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import HomeWorld from '../../components/homeWorld/HomeWorld';
import MovieName from '../../components/moviesName/MovieName';
import Navbar from '../../components/navbar/Navbar'
import "./Character.css"

const Character = () => {
  const location = useLocation();
  const index = location.state.index;
  const currentPage = location.state.currentPage;

  const postPerPage = [10, 10, 10, 10, 10, 10, 10, 10, 2]
  const currentPostID = (currentPage - 1) * postPerPage[currentPage - 1] + (index + 1);
  const url = `https://swapi.dev/api/people/${currentPostID}`

  const [currentPost, setCurrentPost] = useState(null);
  const [homeWorld, setHomeWorld] = useState(null);
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setMovieList(response.data.films)
        setCurrentPost(response.data);
        setHomeWorld(response.data.homeworld);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return (
    <div className="character">
      <Navbar />
      <div className="card-container">
        <h1 className="charTitle">{currentPost?.name.toUpperCase()}</h1>
        <div className="flex-container">
          <HomeWorld url={homeWorld} />
          <div className="movieList-container">
            <h1 className="title" style={{ textAlign: 'center' }}>Movie List</h1>
            {loading === false &&
              movieList.map((movie, i) => {
                return <MovieName movieURL={movie} key={i} />
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Character