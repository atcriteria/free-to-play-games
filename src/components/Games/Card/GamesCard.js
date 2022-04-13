import './GamesCard.css';

export default function GamesCard({data}){
    return(
        <div className='game-card'>
            <h1>Title: {data.title}</h1>
            <h2>Developer: {data.developer}</h2>
            <img src={data.thumbnail} alt={`${data.title} Thumbnail.`}/>
            <p>{data.short_description}</p>
        </div>
    )
}