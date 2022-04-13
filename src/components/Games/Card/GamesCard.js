import './GamesCard.css';

export default function GamesCard({data}){
    return(
        <div className='game-card'>
            <div className='game-card-descriptors'>
                <div className='game-card-descriptors-titles'>
                    <h1>{data.title}</h1>
                    <h2>{data.developer}</h2>
                </div>
                <p>{data.short_description}</p>
            </div>
            <img src={data.thumbnail} alt={`${data.title} Thumbnail.`}/>
        </div>
    )
}