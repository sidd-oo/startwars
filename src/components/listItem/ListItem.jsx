import React from 'react'
import "./ListItem.css"

const ListItem = ({ post }) => {
    const handleFavorite = (e) => {
        console.log(e);
    }
    return (
        <div className="listItem">
            <h1>{post.name}</h1>
            {
                console.log(post)
            }
            <button className="addToFavorite" onClick={(e) => { handleFavorite(e) }}>Add to favourite</button>
        </div>
    )
}

export default ListItem