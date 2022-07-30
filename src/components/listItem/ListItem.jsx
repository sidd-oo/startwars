import React from 'react'
import "./ListItem.css"

const ListItem = ({ post }) => {
    const handleAddToFavorite = (post) => {
        let favorites = JSON.parse(localStorage.getItem("favorite"));
        console.log(favorites, "pre filled localStorage");
        if (favorites !== null) {
            console.log("favorites is not null");
            const isPresent = favorites.reduce((isPresent, current) => {
                if (current !== post) {
                    isPresent = false
                }else{
                    isPresent = true;
                }
                return isPresent;
            }, false)
            console.log(isPresent,"isPresnt:not 1st time");
            if (!isPresent) {
                const newFavorite = [...favorites, post];
                localStorage.clear();
                console.log(newFavorite);
                localStorage.setItem("favorite", JSON.stringify(newFavorite));
            }
        } else {
            console.log("favorites is null");
            console.log(post);
            const arr = [];
            arr.push(post);
            console.log(arr);
            console.log(JSON.stringify(arr));
            localStorage.setItem("favorite",JSON.stringify(arr) );
        }

    }
    return (
        <div className="listItem">
            <h1>{post.name}</h1>
            <button className="addToFavorite" onClick={() => { handleAddToFavorite(post) }}>Add to favourite</button>
        </div>
    )
}

export default ListItem