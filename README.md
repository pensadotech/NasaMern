# Nasa news (MERN)

NASA latest news MERN applicaiton


## Dependedencies

npm init -y 
npm i express mongoose body-parser
npm i if-env
npx create-react-app client 
npm i axios   // Inside the /package.json and client/package.json
npm i cheerio 
npm i react-router-dom // Inside the client/package.json

## MERN Tiricks and ideas

* Under development (laptop), the solution will execute essentially  the react portion inside the "client/src" folder using "webpack dev server". However, when in production, the "server.js" will be executed.

* The react-router-dom need to be Inside the "client/package.json". Install at root level, but then copy refrence from "/package.json+ and add it into "client/package.json". re-initialize the project using "npm i" to make sure all dependencies are brought over.

* Axios need to be refrenced in both "/package.json" and "client/package.json". Install at root level and the copy refrence inside the "client/package.json". re-initialize the project using "npm i" to make sure all dependencies are brought over.

* Create API routes at '/routes', using express router. Thies need to be connected with the 'controller' libraries, which holds all libaries to access teh database or any externla AJAX calls.

* Inside teh clinet/src, ceate a "utils" folder, and inside create an API library ("API.js") that will be used for the react code to invoke the express routes. This is the bridge between the react geenrated front end and the server functionality to manipulate data.




