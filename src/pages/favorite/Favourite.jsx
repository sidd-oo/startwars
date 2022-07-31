import React from 'react'
import ListItem from '../../components/listItem/ListItem';
import Navbar from '../../components/navbar/Navbar'
import "./Favourite.css"

const Favourite = () => {
    const favourites = JSON.parse(localStorage.getItem('favourite'));
    console.log(favourites);
    return (
        <div className="favourite">
            <Navbar />
            <div className="favPosts">
                    {favourites?.map((post, i) => {
                        return (<ListItem post={post} key={i} />)
                    })}
                </div>
        </div>
    )
}

export default Favourite