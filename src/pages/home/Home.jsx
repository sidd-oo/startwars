import React from 'react'
import { List } from '../../components/list/List'
import Navbar from '../../components/navbar/Navbar'
import "./Home.css"
const Home = () => {
    return (<>
        <div className="home">
            <Navbar/>
            <List/>
        </div>
    </>)
}

export default Home