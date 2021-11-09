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
        <div className='flow-container'>
            {likedRecipes.map((recipe) => (
                <div key={recipe._id} className='flow-recipe-container'>
                    <img src={recipe.ImageUrl} />
                    <p className='flow-recipe-title'>{recipe.Title}</p>{' '}
                    <div className='flow-likedby'>
                        <p>Gillas av</p>
                        <p>{recipe.LikedBy} </p>{' '}
                        {/* På liked by loopar man igenom arrayn och tar fram user */}
                    </div>
                    <hr />
                </div>
            ))}
        </div>
    );
}

export default LikedRecipes;
