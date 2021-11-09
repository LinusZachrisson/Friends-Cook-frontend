import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RandomRecipes = (prop) => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetchRecipes();
    }, []);

    const fetchRecipes = () => {
        axios
            .get('http://localhost:4000/api/')
            .then((res) => {
                console.log(res.data.Recipes);
                setRecipes(res.data.Recipes);
            })
            .catch((err) => console.log(err));
    };

    const handleClick = (evt) => {
        console.log(evt.target.id);
        console.log(evt.target.parentNode.id);
        console.log(evt.target.title);
        evt.target.textContent = 'Gillat!';
        const resp = fetch('http://localhost:4000/write', {
            method: 'POST',
            body: JSON.stringify({
                Id: evt.target.id,
                Title: evt.target.title,
                ImageUrl: evt.target.parentNode.id,
                LikedBy: prop.user,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
    };

    return (
        <div className='random-recipes-container'>
            <p className='random-first-text'>
                Här du hitta nya recept att <span>gilla, laga</span>
                <br /> och <span>inspirera</span> dina vänner med.
            </p>
            <a href='/recipes' className='new-recipes-btn'>
                Slumpa nya recept
            </a>
            <div>
                {recipes.map((recipe) => (
                    <div
                        key={recipe.Id}
                        id={recipe.ImageUrl}
                        className='random-recipe-box'
                    >
                        <a
                            href={'https://www.ica.se/recept/' + recipe.Id}
                            className='random-recipe-container'
                        >
                            <img
                                src={recipe.ImageUrl}
                                alt='Bilden kunde inte laddas'
                            />
                            <p className='random-recipe-title'>
                                {recipe.Title}
                            </p>
                        </a>
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
        </div>
    );
};

export default RandomRecipes;
