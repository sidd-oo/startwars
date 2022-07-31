import { Grade } from '@mui/icons-material';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./ListItem.css"
import { ArrowForwardIos } from '@mui/icons-material';

const ListItem = ({ post, index, currentPage }) => {

    const navigate = useNavigate();

    const showCharacterPage = () => {
        console.log(index, currentPage);
        navigate("/character", { state: { index: index, currentPage: currentPage } });
    }
    const handleAddToFavourite = (post) => {
        let favourites = JSON.parse(localStorage.getItem("favourite"));
        console.log(favourites, "pre filled localStorage");
        if (favourites !== null) {
            console.log("favourites is not null");
            const isPresent = favourites.reduce((isPresent, current) => {
                if (current !== post) {
                    isPresent = false
                } else {
                    isPresent = true;
                }
                return isPresent;
            }, false)
            console.log(isPresent, "isPresnt:not 1st time");
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
            localStorage.setItem("favourite", JSON.stringify(arr));
        }

    }
    return (
        <div className="listItem">
            <div className="top">
                <Grade className="addToFavourite" onClick={() => { handleAddToFavourite(post) }}></Grade>
            </div>
            <div className="middle">
                <div className="left">
                    <h1 className="keyValuePair"> <span className="key">Mass   :   </span>  <span className="spanValues" >{post?.mass.toUpperCase()}</span> </h1>
                    <h1 className="keyValuePair"><span className="key">Height   :   </span>  <span className="spanValues" >{post?.height.toUpperCase()}</span> </h1>
                    <h1 className="keyValuePair"><span className="key">Gender   :   </span>   <span className="spanValues" >{post?.gender.toUpperCase()}</span></h1>
                    <h1 className="keyValuePair"><span className="key">Eye Color   :   </span>  <span className="spanValues" >{post?.eye_color.toUpperCase()}</span></h1>
                    <h1 className="keyValuePair"><span className="key">Hair Color   :   </span>  <span className="spanValues" >{post?.hair_color.toUpperCase()}</span> </h1>
                    <h1 className="keyValuePair"><span className="key">Skin Color   :   </span>   <span className="spanValues" >{post?.skin_color.toUpperCase()}</span></h1>
                    <h1 className="keyValuePair"><span className="key">Year of birth   :   </span>   <span className="spanValues" >{post?.birth_year.toUpperCase()}</span></h1>
                </div>
                <div className="right">
                    <ArrowForwardIos className="nextArrowIcon" onClick={() => { showCharacterPage() }} />
                </div>
            </div>
            <div className="bottom">
                <h1 className='title'>{post?.name.toUpperCase()}</h1>
            </div>
        </div>
    )
}

export default ListItem