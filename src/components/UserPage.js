import { useEffect, useState } from 'react';


const UserPage = (prop) => {
    const [likedRecepies, setLikedRecepies] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:4000/readall`)
            .then((res) => res.json())
            .then((data) => {
                let recepies = [];
                for (let i in data) {
                    if (data[i].LikedBy.includes(prop.user)) {
                        recepies.push(data[i]);
                    }
                }
                setLikedRecepies(recepies);
            });
    }, [likedRecepies]);

    const handleOnClick = (isRemoved, evt) => {
        console.log(evt.target.id);
        console.log(evt.target.parentNode.id);
        console.log(evt.target.title);
        const resp = fetch("http://localhost:4000/write", {
        method: "POST",
        body: JSON.stringify({
            Id: evt.target.id,
            Title: evt.target.title,
            ImageUrl: evt.target.parentNode.id,
            LikedBy: prop.myLikes,
            Remove: isRemoved,
        }),
        headers: {
            "Content-Type": "application/json",
        },
        }); 
    }

    return (
        <div className='profile-container'>
            <p>
                Gillade recept av <span> {prop.user}</span>
            </p>
            <div className='profile-liked-rec-container'>
                {likedRecepies.map((food, index) => {
                    return (

                        <div key={index} className='profile-recipe-con'>
                            <a href={"https://www.ica.se/recept/" + food.Id} target="_blank">
                            <img src={food.ImageUrl} alt='Food of recepie' />
                            </a>
                            {' '}
                            {/* <a href={"https://www.ica.se/recept/" + food.Id}>
                                <img src={food.ImageUrl} alt="Bilden kunde inte laddas" />
                            </a> */}

                            <h4>{food.Title}</h4>
                            <p>{food.LikedBy}</p>
                            {food.LikedBy.includes(prop.myLikes) ? 
                            <button title={food.Title} id={food.Id} imageurl={food.ImageUrl}onClick={(evt) => handleOnClick(true, evt)}>Unlike</button> : 
                            <button title={food.Title} id={food.Id} imageurl={food.ImageUrl} onClick={(evt) => handleOnClick(false, evt)}> Like </button>}
                            
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default UserPage;
