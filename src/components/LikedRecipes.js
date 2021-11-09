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

    return (
        <div>
            {likedRecipes.map((recipe) => (
                <div key={recipe.Id}>
                    <a href={'https://www.ica.se/recept/' + recipe.Id}>
                        <img
                            src={recipe.ImageUrl}
                            alt='Bilden kunde inte laddas'  
                        />
                            <p>{recipe.Title}</p>
                        </a>
                    <div>{recipe.LikedBy.length - 1 === 0 ? <div>{recipe.LikedBy[0]} gillar receptet. </div> : <div> {recipe.LikedBy[0]} och {recipe.LikedBy.length - 1} vänner till gillar receptet.</div>}  </div>
                </div>
            ))}
        </div>
    );
}

export default LikedRecipes;
