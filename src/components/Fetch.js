fetch('http://localhost:3000/api')
    .then((resp) => resp.json())
    .then((data) => {
        console.log(data.Recipes);
        let recipes = data.Recipes;
    });
