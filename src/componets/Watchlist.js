import React, { useState, useEffect}from 'react'
import WatchCard from './WatchCard'
import { Link } from "react-router-dom"

const Watchlist = ({user}) => {
    
    const [watchedData, setWatchedData] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        fetch(`http://127.0.0.1:3000/watcheds/${user.id}`)
        .then(r => r.json())
        .then(watchData => {
            setWatchedData(watchData)
            setIsLoaded(true)
        })
    },[])

    if(!isLoaded) return <h2>Loading...</h2>

    const displayWatch = watchedData.map((watch)=> <WatchCard key={watch.id} watch={watch} user={user} /> )
    
    return (
        <div>
            {displayWatch}
            <Link to= '/home'>Home Page</Link>
        </div>
    )
}

export default Watchlist