import axios from 'axios';
import React, { useLayoutEffect, useState } from 'react'
import ListItem from '../listItem/ListItem'
import Pagination from '../pagination/Pagination';
import "./List.css"

export const List = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useLayoutEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(`https://swapi.dev/api/people/?page=${currentPage}`);
      setPosts(res.data.results);
    }
    fetchPosts();
  }, [currentPage]);

  return (
    <div className="list">
      <div className="posts">
        {posts.map((post, i) => {
          return (<ListItem post={post} key = {i} index = {i} currentPage = {currentPage}/>)
        })}
      </div>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />

    </div>
  )
}
