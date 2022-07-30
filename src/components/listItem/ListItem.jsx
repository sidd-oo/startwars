import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./ListItem.css"

const ListItem = ({ post , index, currentPage}) => {

    const navigate = useNavigate();

    const showCharacterPage = () => {
        console.log( index, currentPage);
        navigate("/character", {state: {index: index, currentPage: currentPage}});
    }
    const handleAddToFavourite = (post) => {
        let favourites = JSON.parse(localStorage.getItem("favourite"));
        console.log(favourites, "pre filled localStorage");
        if (favourites !== null) {
            console.log("favourites is not null");
            const isPresent = favourites.reduce((isPresent, current) => {
                if (current !== post) {
                    isPresent = false
                }else{
                    isPresent = true;
                }
                return isPresent;
            }, false)
            console.log(isPresent,"isPresnt:not 1st time");
            if (!isPresent) {
                const newFavourite = [...favourites, post];
                localStorage.clear();
                console.log(newFavourite);
                localStorage.setItem("favourite", JSON.stringify(newFavourite));
            }
        } else {
            console.log("favourites is null");
            console.log(post);
            const arr = [];
            arr.push(post);
            console.log(arr);
            console.log(JSON.stringify(arr));
            localStorage.setItem("favourite",JSON.stringify(arr) );
        }

    }
    return (
        <div className="listItem" onClick={()=>{showCharacterPage()}}>
            <h1>{post.name}</h1>
            <button className="addToFavourite" onClick={() => { handleAddToFavourite(post) }}>Add to favourite</button>
        </div>
    )
}

export default ListItem