import axios from 'axios';
import { useEffect, useState } from 'react';
import './GamesContainer.css';
import GamesCard from '../Card/GamesCard';

const options = {
    method: 'get',
    url: 'https://www.freetogame.com/api/games',
    params: {
        platform: "pc",
        category: "shooter"
    },
    headers: {
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY
    }
}

export default function GamesContainer(){
    const [state, setState] = useState([])
    useEffect(() =>{
        
        axios.get("https://free-to-play-games-database.p.rapidapi.com/api/games",options)
            .then(res => {
                setState(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])
    return(
        <div className='games-container'>
            {
                state.map((data) => {
                    return <GamesCard data={data} />
                })
            }
        </div>
    )
}