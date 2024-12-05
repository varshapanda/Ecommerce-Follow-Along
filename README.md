# E-Commerce Application

This project aims to create an interactive and user-friendly e-commerce platform where users can browse products, place orders, and make secure payments. The platform is designed to provide a seamless shopping experience while ensuring secure transactions and personalized user interactions.

## Milestone 1: Project Overview

### 1. Authentication
- Implementation of secure **login**, **logout**, and **signup** functionalities.
- Ensures user data protection and session management for a seamless experience.
- Explores how authentication enhances both security and usability of the platform.

### 2. Product Page
- Development of a dedicated **Product Page** to display all available products.
- Integration of APIs to fetch and dynamically manage product data.

### 3. Orders Page
- A personalized **Orders Page** where users can:
  - Upon selecting a product, users are redirected to this page to review and place an order for the selected items.
  - View their order history.
  - Access order-specific details dynamically.
- Leverage APIs to fetch user-specific order data securely.

### 4. Payment Gateway
- Simulation of a **Payment Gateway** to handle user purchases.
- User-friendly interface to review purchase details and finalize the transaction

## Milestone 2: Setting Up Frontend and Backend

### Setting up of Frontend using the following steps
- created a folder in code editor using the command "npm create vite@ latest frontend"(React)
- create node modules package using the command "npm install"

#### Configuring tailwind for streamlined styling
- Install the required packages from tailwind.css using the following commands "npm install -D tailwindcss postcss autoprefixer.
- Initialize using "npx tailwindcss init -p".
- After initializing we get the tailwind.config.js file
- Config helps apply style to the entire frontend project
- Edited the content part of tailwind.config.js file.
- Added tailwind directories to css (index.css and App.css)

### Setting up of Backend using the following steps
- Express helps us write the APIs for the app
- Mongoose configures the database with the backend
- cors allows a web application running at one origin to request resources from a different origin.
- nodemon is a utility that automatically restarts your Node.js application when it detects file changes in the directory where the application is running.
- create a folder using the command "mkdir backend"
- Initialize backend environment "npm init -y" edit the package name, give a description.
- After doing this we can see package.json file
- Install packages "express,nodemon,cors"
- create src folder , inside src folder create the following folders and files named middleware, config(connect backend to teh database), routes, controllers and index.js file

### Creating a login page(Frontend)
- create a components folder under src , under components folder create authorization and Navbar folder
- Inside Authorization folder create Login.jsx and Signup.jsx files
- Edit App.jsx file
- Edit Login.jsx file 
- In Login.jsx file, added 2 input fields with placeholders for entering email address and password respectively . Also added a button to Login after entering the details.
- Added styling using taildwind css.


## MILESTONE 3 : Project Setup for Backend 

### 1. Setting up of Node.js server and handling the API requests
- The server is configured using the Express.js framework in the app.js file.
- The dotenv package is used to load variables from the .env file for secure configuration.
- A basic route is implemented to validate that the server is running.
- The server listens on the port specified in the .env file.
### 2. Connect your application to MongoDB to store and manage data
- MongoDB is integrated using the Mongoose library. The database.js file contains the logic for connecting to the MongoDB database.
- The connectDatabase function uses mongoose.connect() to establish a connection to MongoDB.
- Logs descriptive error messages in case the connection fails.
- Using dotenv ensures credentials are not hardcoded.
- Displays a success message with the database host upon connection.
### 3. Connection between database and server
- The index.js file integrates the server and database connection, ensuring the database is connected whenever the server starts.
- The Express server is started and listens on the specified port.
- The connectDatabase function is invoked during the server startup process.
- Logs messages for both successful server startup and database connection.
### 4. Error handlers in backend - these handlers rectify where has the error ocurred filename.js
- The ErrorHandler.js file defines a custom error handler class to streamline error management.
- Error Class: Extends the native JavaScript Error class to add a status code.
- Stack Trace: Captures the error stack for debugging purposes.








