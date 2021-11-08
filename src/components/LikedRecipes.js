import React, { useEffect, useState } from 'react';


function LikedRecipes() {
    let [likedRecipes, setLikedRecipes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/users/getlikedrecipes')
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data);
                setLikedRecipes(data);
            });
    }, []);

    const handleClick = (e) => {
        e.preventDefault();
        console.log(e.target.id);

        fetch('https://www.ica.se/recept/'  + e.target.id, {
            mode: 'no-cors',
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data);
            });
    };

    return (
        <div>
            {likedRecipes.map((recipe) => (
                <div key={recipe.Id}>
                    <img src={recipe.ImageUrl} /> 
                    <div
                    id={recipe.Id} 
                    onClick={handleClick}
                    >
                    {recipe.Title}
                </div>
                    <div>{recipe.LikedBy.length - 1 === 0 ? <div>{recipe.LikedBy[0]} gillar receptet. </div> : <div> {recipe.LikedBy[0]} och {recipe.LikedBy.length - 1} vänner till gillar receptet.</div>}  </div>
                </div>
            ))}
        </div>
    );
}

export default LikedRecipes;
