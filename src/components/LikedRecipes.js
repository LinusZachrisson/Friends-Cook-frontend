import React, { useEffect, useState, useContext } from 'react';
import UserContext from "../UserContext";


function LikedRecipes(prop) {
    let [likedRecipes, setLikedRecipes] = useState([]);

    const user = useContext(UserContext);

    useEffect(() => {
        fetch('http://localhost:4000/users/getlikedrecipes')
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data);
                setLikedRecipes(data);
            });
    }, []);

    const handleClick = (evt) => {
        console.log(evt.target.id);
        console.log(evt.target.parentNode.id);
        console.log(evt.target.title);
        console.log(user.username);
        evt.target.textContent = 'Gillat!';
        const resp = fetch('http://localhost:4000/getLike', {
            method: 'POST',
            body: JSON.stringify({
                Id: evt.target.id,
                Title: evt.target.title,
                ImageUrl: evt.target.parentNode.id,
                LikedBy: user.username,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
    };

    return (
        <div>
            {likedRecipes.map((recipe) => (
                <div key={recipe.Id} id={recipe.ImageUrl}>
                    <a href={'https://www.ica.se/recept/' + recipe.Id}>
                        <img
                            src={recipe.ImageUrl}
                            alt='Bilden kunde inte laddas'  
                        />
                            <p>{recipe.Title}</p>
                        </a>
                    <div>{recipe.LikedBy.length - 1 === 0 ? <div>{recipe.LikedBy[0]} gillar receptet. </div> : <div> {recipe.LikedBy[0]} och {recipe.LikedBy.length - 1} vänner till gillar receptet.</div>}  </div>
                    <button
                            onClick={handleClick}
                            title={recipe.Title}
                            id={recipe.Id}
                            imageurl={recipe.ImageUrl}
                        >
                            Gilla
                        </button>
                </div>
                
            ))}
        </div>
    );
}

export default LikedRecipes;
