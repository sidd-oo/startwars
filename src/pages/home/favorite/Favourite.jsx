import React from 'react'
import Navbar from '../../../components/navbar/Navbar'
import "./Favourite.css"

const Favourite = () => {
    const favourites = JSON.parse(localStorage.getItem('favourite'));
    console.log(favourites);
    return (
        <div className="favourite">
            <Navbar />
            <div className="favPosts">
                {favourites?.map((post, i) => {
                    return (
                    <div className="listItem" key={i}>
                        <h1>{post.name}</h1>
                    </div>)
                })}
            </div>
        </div>
    )
}

export default Favourite