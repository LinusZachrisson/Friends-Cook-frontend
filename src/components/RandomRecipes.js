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

    // START: Tillfällig styling
    const simpleParentStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        flexFlow: 'row wrap',
        marginTop: '1rem',
    };

    const simpleChildrenStyle = {
        height: '7rem',
        flex: '50%',
        paddingBottom: '6rem',
    };

    const simpleNewRecipesStyle = {
        display: 'inlineBlock',
        background: 'darkseagreen',
        color: 'white',
        borderRadius: '0.3rem',
        padding: '0.3rem',
    };

    const simpleImgStyle = {
        height: '9rem',
        width: '9rem',
        borderRadius: '1rem',
    };

    const simpleTextStyle = {
        margin: '0',
    };
    // END: Tillfällig styling

    return (
        <div>
            <a href='/recipes' style={simpleNewRecipesStyle}>
                Slumpa nya recept
            </a>
            <div style={simpleParentStyle}>
                {recipes.map((recipe) => (
                    <div
                        key={recipe.Id}
                        style={simpleChildrenStyle}
                        id={recipe.ImageUrl}
                    >
                        <a href={'https://www.ica.se/recept/' + recipe.Id}>
                            <img
                                src={recipe.ImageUrl}
                                alt='Bilden kunde inte laddas'
                                style={simpleImgStyle}
                            />
                            <p style={simpleTextStyle}>{recipe.Title}</p>
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
