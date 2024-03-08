# MERN_Blog
 - Simple Blogging app using MERN stack. 
 - Does basic CRUD operation on blogs.
 - Navigate to page using useNavigate hook
 - User Registration, Login and Logout included.
 - MaterialUI and inline CSS used for styling.

# Tech Stack Used: 
- MongoDB
- ExpressJS
- ReactJS
- NodeJS
- MaterialUI
- Basic Redux

# Getting Started with the App
 #### `client` - Holds the client application
- #### `public` - This holds all of our static files
- #### `src`
    - #### `components`
    - #### `redux`
    - #### `App.js`
    - #### `index.js`
    - #### `pages`
- #### `package.json`
#### `server` - Holds the server application
   - #### `.env`
   - #### `controllers`
   - #### `models`
   - #### `routes`
   - #### `config`
   - #### `server.js`
#### `package.json`
#### `.gitignore`
#### `README` 

## Create Environment variable i.e .env file and assign following variables.

DATABASE_URL = YOUR_MONGODB_URL\
PORT = YOUR_PORT_NUMBER

## Dependency Installation Steps And to setup App
- Upon downloading the zip file
- Use "npm i" command in the main directoty to install server-side dependency
- Change directory to client and use "npm i" command there
- Then go back to main directory
- Use "npm run dev" command to run both client-side and server-side simultaneously
- Then You Are ALL SET!!!

## Improvements to be done
  - Authenticate User and Routes by using jsonwebtoken
    
