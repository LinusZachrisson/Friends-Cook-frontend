import React, { useEffect, useState } from 'react';

function LikedRecipes(){

    let [likedRecipes, setLikedRecipes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/users/getlikedrecipes')
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data);
                setLikedRecipes(data);
            });
    }, []);

    return (
        <div>
            {likedRecipes.map((recipe) => (
                <div key={recipe._id} >
                    <img src={recipe.ImageUrl} />{' '}{recipe.Title}{' '}{recipe.LikedBy}
                    {/* På liked by loopar man igenom arrayn och tar fram user */}
                </div>
            ))}
            
        </div>
    )
};

export default LikedRecipes;