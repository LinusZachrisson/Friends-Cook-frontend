import React, { useEffect, useState } from "react";

function LikedRecipes() {
  let [likedRecipes, setLikedRecipes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/users/getlikedrecipes")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setLikedRecipes(data);
      });
  }, []);

  return (
    <div className="flow-container">
      <p className="flow-p">
        <span>Behöver du middagstips?</span>
        <br /> Kolla in vad dina vänner gillar för recept.
      </p>
      {likedRecipes
        .slice(0)
        .reverse()
        .map((recipe) => (
          <div key={recipe._id} className="flow-recipe-container">
            <a href={"https://www.ica.se/recept/" + recipe.Id}>
              <img src={recipe.ImageUrl} alt="Bilden kunde inte laddas" />
            </a>
            <p className="flow-recipe-title">{recipe.Title}</p>{" "}
            <div className="flow-likedby">
              {recipe.LikedBy.length - 1 === 0 ? (
                <p>
                  Gillas av <span>{recipe.LikedBy[0]}</span>{" "}
                </p>
              ) : (
                <p>
                  {" "}
                  <span>{recipe.LikedBy[0]}</span> och{" "}
                  <span>{recipe.LikedBy.length - 1}</span> vänner till gillar
                  receptet.
                </p>
              )}
            </div>
            {/* <hr /> */}
          </div>
        ))}
    </div>
  );
}

export default LikedRecipes;
