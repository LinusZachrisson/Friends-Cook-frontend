import React, { useEffect, useState } from "react";
import axios from "axios";

const RandomRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = () => {
    axios
      .get("http://localhost:4000/api/")
      .then((res) => {
        setRecipes(res.data.Recipes);
      })
      .catch((err) => console.log(err));
  };

  // START: Tillfällig styling
  const simpleParentStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    flexFlow: "row wrap",
    marginTop: "1rem",
  };

  const simpleChildrenStyle = {
    height: "7rem",
    flex: "50%",
    paddingBottom: "6rem",
  };

  const simpleNewRecipesStyle = {
    display: "inlineBlock",
    background: "darkseagreen",
    color: "white",
    borderRadius: "0.3rem",
    padding: "0.3rem",
  };

  const simpleImgStyle = {
    height: "9rem",
    width: "9rem",
    borderRadius: "1rem",
  };

  const simpleTextStyle = {
    margin: "0",
  };
  // END: Tillfällig styling

  return (
    <div>
      <a href="/recipes" style={simpleNewRecipesStyle}>
        Slumpa nya recept
      </a>
      <div style={simpleParentStyle}>
        {recipes.map((recipe) => (
          <div key={recipe.Id} style={simpleChildrenStyle}>
            <img
              src={recipe.ImageUrl}
              alt="Bilden kunde inte laddas"
              style={simpleImgStyle}
            />
            <p style={simpleTextStyle}>{recipe.Title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RandomRecipes;
