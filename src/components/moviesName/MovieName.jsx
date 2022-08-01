import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./MovieName.css"

const MovieName = ({ movieURL }) => {
    const [movieDetails, setMovieDetails] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        axios
            .get(movieURL)
            .then((response) => {
                setMovieDetails(response.data);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [movieURL])

    return (
        <div className="movieNameDetails">
            {loading === false &&
                <>
                    <h1> {movieDetails?.title}</h1>
                </>
            }
        </div>
    )
}

export default MovieName