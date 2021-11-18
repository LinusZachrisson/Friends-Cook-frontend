# Friends & Cook!

A very social cooking app, where one can (eventually - yet to be implemented!) add friends, and like recipes that are randomized from an API. These recipes can then be liked by any user, and if so, prominently display on the front pages of all their friends. Friends & Cook - say goodbye to wondering what's for dinner!

Live demo at https://linuszachrisson.github.io/Friends-Cook-frontend/ and backend (built in node.js via express-generator) at https://github.com/ToniHalmetoja/friends-and-cook-backend

##Test-login: username Toni, password 12345##

# To run locally!

1) Clone the repo and subsequently clone the backend. 

2) All fetches are done in the backend due to limitations in the current API, so if you desire to use something else - such as an English-language source of recipe, chang the relevant URL and fetch functions. These can be found in router.get("/api") in the /users router.

3) Similarly, you'll want to modify the authentication route so it refers to your own own database. The current one is set up to connect to a MongoDB.

4) NPM install to install the dependencies and NPM start to run. Remember to run both the backend and frontend!

5) Enjoy! Currently, users are hardcoded, but recipes can be randomized and liked, and if liked, they are in saved to the database and displayed on the landing page.

# Specifics!

The front end half of this project uses React and Axios, along with some smaller packages for ease of use such as the cors NPM package.

The backend uses Node.js and Express.

The external API used for the recipes is that from ICA, from the URL http://handla.api.ica.se/api/

The database we employ is a simple MongoDB one, hosted on MongoDB Atlas.

