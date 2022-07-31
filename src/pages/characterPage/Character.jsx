import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import HomeWorld from '../../components/homeWorld/HomeWorld';
import ListItem from '../../components/listItem/ListItem';
import Navbar from '../../components/navbar/Navbar'
import "./Character.css"

const Character = () => {
  const location = useLocation();
  const index = location.state.index;
  const currentPage = location.state.currentPage;

  const postPerPage = [10, 10, 10, 10, 10, 10, 10, 10, 2]
  const currentPostID = (currentPage - 1) * postPerPage[currentPage - 1] + (index + 1);
  console.log(currentPostID);
  const url = `https://swapi.dev/api/people/${currentPostID}`

  //
  const [currentPost, setCurrentPost] = useState(null);
  const [homeWorld, setHomeWorld] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setCurrentPost(response.data);
        setHomeWorld(response.data.homeworld)
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
      <div className="container">
        <h1>{currentPost?.name}</h1>
        <HomeWorld url = {homeWorld}/>

      </div>
    </div>
  )
}

export default Character