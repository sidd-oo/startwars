import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./HomeWorld.css"

const HomeWorld = ({ url }) => {

    const [homeWorldDetails, setHomeWorldDetails] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        axios
            .get(url)
            .then((response) => {
                setHomeWorldDetails(response.data);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [url])

    return (
        <div className="homeWorldPost">
            <h1 className="title" style={{textAlign: 'center', marginBottom:"10px"}}>Details</h1>
            {loading === false ?
                <>
                    <h1>Name: {homeWorldDetails?.name}</h1>
                    <h1>Rotation Period: {homeWorldDetails?.rotation_period}</h1>
                    <h1>Orbital Period: {homeWorldDetails?.orbital_period}</h1>
                    <h1>Diameter: {homeWorldDetails?.diameter}</h1>
                    <h1>Climate: {homeWorldDetails?.climate}</h1>
                    <h1>Gravity: {homeWorldDetails?.gravity}</h1>
                    <h1>Terrain: {homeWorldDetails?.terrain}</h1>
                    <h1>Surface Water: {homeWorldDetails?.surface_water}</h1>
                    <h1>Population: {homeWorldDetails?.population}</h1>
                </>
                :  " " }

        </div>
    )
}

export default HomeWorld