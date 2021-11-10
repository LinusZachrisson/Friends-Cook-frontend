import React, { useEffect, useState, useContext } from "react";
import UserContext from "../UserContext";

function LikedRecipes() {
  let [likedRecipes, setLikedRecipes] = useState([]);

  const user = useContext(UserContext);

  useEffect(() => {
    fetch("http://localhost:4000/users/getlikedrecipes")
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
    evt.target.textContent = "Gillat!";
    const resp = fetch("http://localhost:4000/write", {
      method: "POST",
      body: JSON.stringify({
        Id: evt.target.id,
        Title: evt.target.title,
        ImageUrl: evt.target.parentNode.id,
        LikedBy: user.username,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

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
          <div
            key={recipe._id}
            className="flow-recipe-container"
            id={recipe.ImageUrl}
          >
            <a href={"https://www.ica.se/recept/" + recipe.Id} target="_blank">
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
            <button
              onClick={handleClick}
              title={recipe.Title}
              id={recipe.Id}
              imageurl={recipe.ImageUrl}
            >
              Gilla
            </button>
            {/* <hr /> */}
          </div>
        ))}
    </div>
  );
}

export default LikedRecipes;
