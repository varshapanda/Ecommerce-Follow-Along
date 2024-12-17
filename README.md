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


## MILESTONE 4 : Creating User Model and Controller

## 1. Creating user model for our database
- The User Model defines the schema for storing user data in MongoDB.

#### Key Components:
- Name, Email, and Password: Required fields for every user.
- Address: A nested structure that supports fields like city, country, and zip code.
- Avatar: Stores user-uploaded file information (URL and public ID).
- Role: Identifies the type of user (default: "user").
- Reset Password Token: Used for password recovery processes.
## 2. Setting up controllers to handle user-related data
- Controllers contain the logic for handling user data. They act as the intermediaries between the database and the routes.
- A controller manages the interaction between routes and models.
- Check if the user exists in the database using findOne
- If not, create a new user document using the save() method.
- Error Handling: Centralize error handling for better debugging.
## 3. Enabling file uploads using Multer
- Multer is middleware that handles requests, primarily used for file uploads.
- Custom Storage: Allows defining a storage destination and filename format.
- Ease of Use: Simplifies handling file uploads in Express.js applications.

## MILESTONE 5 : Creating the Signup page 

### Overview

In this milestone, the focus was on creating the frontend for the sign-up page, implementing form validation using RegEx, and setting up routing using React Router. This work ensures that users can seamlessly register on the platform while providing accurate and valid information.

### 1. Created a Signup Page
 Designed a clean and user-friendly signup page using HTML and  Taliwind CSS.
#### The page includes the following input fields:
- Name: For users to provide their full name.
- Email: To capture the user's email address.
- Password: To allow users to set up a secure password.
- File Upload: Allows users to upload a file in .jpg, .jpeg, or .png format.

### 2. Created Validation Object Using RegEx
- Built a validation object using JavaScript Regular Expressions (RegEx) to ensure data accuracy.

#### Validation rules include:
   1. Name: Checks that the name is not empty and only contains valid characters.
   2. Email: Validates that the email follows the standard email format (e.g., user@example.com)
   3. Password: Ensures the password meets security criteria, including:
- Minimum length of 8 characters, Contains at least one uppercase letter, one lowercase letter and one special character.
- Added error messages for invalid inputs to guide users in correcting their data.
- Added file upload handling to accept images in the specified formats.
- Displayed error messages dynamically for invalid inputs, providing clear feedback to users for corrections.

### 3. Setup React-Router for Present Pages

- Integrated React Router to enable seamless navigation between pages.

- Configured routes for the application, including:
  1. Signup Page: /Signup
  2. Login Page: /Login
  3.  Home Page: /

- Implemented navigation components to allow users to switch between pages effortlessly.
- Updated the App component to include the necessary routes using <Routes> and <Route> from React Router.  

## Milestone 6

This milestone focuses on implementing email verification for user signup using JWT (JSON Web Tokens) and Nodemailer. By the end of this milestone, the application will:

- Generate a JWT token during user signup.
- Send a verification email with a link containing the token.
- Verify the token to activate the user account.

### 1. Generate a JWT Token at Signup

- Check User Existence: Ensure the email provided by the user is not already in the database. If the user exists, return an error.

- Create a New User: Save the user's details (such as name, email, and password) in the database. 

- Generate JWT Token: Create a JWT token that encodes essential user information (e.g., name and email) and sign it with a secret key (SECRET_KEY) defined in your .env file. Set an appropriate expiration time for the token.

### 2. Create a Verification Link with the Token

- Construct the Link: After generating the token, create a verification link by appending the token as a query parameter. The link should point to the verification endpoint of your application, e.g., http://localhost:8080/user/activation/:token.

- Store Token in Email: Ensure the generated link is included in the email body, providing users with clear instructions to verify their account.

### 3. Configure Nodemailer to Send the Email with the Verification Link

- Set Up Nodemailer: Use Nodemailer to configure an email transporter. Define SMTP settings, such as the service (e.g., Gmail) and authentication credentials.

- Compose Email: Craft an email containing the verification link.

- Send the Email: Trigger the email-sending function after successfully creating a user and generating the verification token.

### 4. Create an Endpoint to Verify the Token and Activate the User

- Token Verification Logic: In the verification endpoint, decode the JWT token using the secret key. Validate that the token has not expired and that its data matches the expected format.

- Activate User: If the token is valid, locate the user in the database using the decoded information (e.g., email). Update their activation status to indicate their account is verified.

- Handle Errors: Return appropriate responses for invalid or expired tokens, and ensure robust error handling to prevent unauthorized access.














