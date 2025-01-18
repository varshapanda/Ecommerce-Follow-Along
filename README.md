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


## MILESTONE 7 : User Signup and Login with Password Encryption
In this milestone, we implemented two essential routes: signup and login to handle user authentication. These routes ensure that user credentials are securely stored and validated.

### Routes Implemented

#### 1. Signup Route
1. Extract User Data: 
   - Receive user input sent via the request body: name, email, and password.
2. Check if the User Already Exists:
   - Query the database to see if an entry with the provided email already exists.
   - If Yes, return a response saying:
"User already present, please login directly."

3. Hash the Password: 
   - If the user is not already registered, hash the password to ensure it is securely stored.
   - Use hashing libraries like Bcrypt.js for encryption.
   - The original plain-text password is never stored in the database.
4. Save the User Data to the Database:
    - Create a new user entry with the following fields:
       - name
       - email
       - hashed password
5. Send a Success Response:

   - Return a response confirming that the user has been successfully registered.


#### 2. Login Route 
The login route authenticates existing users.
1. Extract User Data:
   - Receive user credentials sent via the request body: email and password.
2. Check if the User Exists in the Database:
    - Query the database to find a user with the provided email.
    - If No User Found → Return a response saying:
"User not found, please signup first." 
3. Validate the Password:

    -  Compare the provided plain-text password with the hashed password stored in the database.
    - Use a hashing library (e.g., Bcrypt) to handle the comparison securely.
4. Generate an Authentication Token:
   - If the password matches, generate a secure token (e.g., JWT) to manage user sessions.
   - Send the token as a cookie for client-side storage. 

5. Send a Success Response:
   - Return a response confirming that the user has successfully logged in. 

## MILESTONE 8 : Create a Card Component and design a Homepage Layout

### 1. **Card Component**

- **Reusable Design**: A **Card Component** was created to display the key details of each product. This component is flexible, meaning it can be reused for any product with different details. The card displays:
  - Product name (`title`)
  - Product image (`image`)
  - Product price (`price`)
  - Product description (`description`)

  This ensures that the component is dynamic, allowing it to be used for various products without hardcoding values into the component.

- **Dynamic Content**: 
  - To make the card component truly dynamic, it receives props from its parent component. 
  - These props include the product details like name, image URL, price, and description. 
  - This design allows the component to render different products by simply passing in new data. 
  - The `Card` component does not need to be modified for each new product; the data just needs to be passed correctly when rendering it.

### 2. **Homepage Layout**

- **Grid Layout**: 
  - To ensure a visually organized and responsive display of product cards, a **grid layout** was implemented using **Tailwind CSS**. 
  - This grid layout arranges the cards in rows and columns. Each card is placed in a flexible container, which adapts to the size of the screen. 
  

## MILESTONE 9 : 

### Overview
In this milestone our goal was to create a product entry page for an e-commerce platform. The product entry form allows users to submit information about a product, including title, description, discounted and original prices, stock quantity, category, rating, and product images. Upon form submission, the product details are sent to a server using an HTTP POST request for further processing.

#### 1. Setting Up the Project:
- I used React, a popular JavaScript library for building user interfaces.
- Axios, a promise-based HTTP client, was used to handle API requests for submitting the form data.

#### 2. Creating the Product Entry Form:
 - The form captures multiple product details through various form fields, including:
   - Title
   - Description
   - Discounted price
   - Original price
   - Stock quantity
   - Category
   - Rating
   - Product images
- For each input, event handlers were created to update the form state whenever the user interacts with the fields.

#### 3. Managing Form State:
- React's useState hook was used to store and manage the form data as the user types in the fields.
- This state includes the product title, description, rating, price details, quantity, category, and uploaded images.
- A separate state variable tracks any input errors, which are displayed to the user if they fail to enter necessary details or if the values don't meet the validation requirements.

#### 4. Handling File Upload:
- An input element with the type="file" attribute was used to allow users to upload product images.
- A change event handler captures the selected files, converting them into an array and storing them in the state.

#### 5. Form Validation:
- Before submitting the form, basic validation checks were implemented to ensure that all required fields are filled in and contain valid data.
- If any of the conditions were not met, an error message is displayed to inform the user.

#### 6. Form Data Submission:
- Upon successful form validation, a FormData object was created to append the input data, including both text-based information (such as title and price) and the images (file paths).
- This data is then sent to the server using Axios via an HTTP POST request. The server is assumed to handle the product data on the backend.

#### 7. Routing:
- The application used React Router to manage navigation between different pages. The user can navigate between the homepage, login, signup, and the product entry page.
- Each route is linked to a specific component, with the ProductEntryPage being one of the primary components for submitting product details.

#### 8. User Interface and Styling:
- Tailwind CSS was used for styling the form and ensuring a responsive and user-friendly interface.
- The form was designed with appropriate labels, input fields, and buttons to ensure a clean, accessible layout for users to easily submit product information.

#### 9. Error Handling:
- The form includes error handling that checks whether the input fields contain valid data and alerts the user if there are any missing or invalid inputs.
- This includes checking if fields like price and quantity contain positive values and ensuring text fields are not left empty.

#### 10. Product Entry Page Route (/product-entry-page):
- In the App.jsx file, React Router was used to set up the navigation, this route is associated with the ProductEntryPage component. Users can navigate to this page to enter product details, including images, prices, and other attributes.


## MILESTONE 10: Product Schema and Endpoint Creation

### Overview
This part of the project is designed to handle product uploads in an e-commerce platform, where products are accompanied by images that are uploaded to a cloud storage service (Cloudinary) and stored in a database

1. **Cloudinary Configuration (cloudinary.js)**
    - *Setup Cloudinary*
      - Initially, we integrated Cloudinary, a cloud-based image and video management service, to handle image uploads. We used the cloudinary package to communicate with Cloudinary’s API.
      - The configuration is done using credentials, including cloud_name, api_key, and api_secret. These values are stored in environment variables for security and flexibility, and are loaded through the dotenv package.
    - Environment-Based Configuration
      - We conditionally loaded the environment variables only if the application is not in production. This ensures that the sensitive API keys are not exposed in the production environment.
2. **Product Routes (product.route.js)**
    - *Define the Route*
      - A route for creating products (/create-product) was set up using Express.js. This route handles POST requests to add a new product to the platform.
    - *Image Upload with Multer*
      - We used the multer middleware to handle file uploads. It temporarily stores files in a folder (temp-uploads) before they are uploaded to Cloudinary. The upload.array('files', 5) specifies that a maximum of 5 files can be uploaded in a single request.
   - *Route Handler Integration*
      - The route handler for creating the product is linked to a controller function (createProductController), where the actual business logic for product creation happens.
3. **Product Model (Product.model.js)**
    - *Define the Schema*
      - We created a Mongoose schema to define the structure of the product data in the database. Fields like title, description, rating, discountedPrice, originalPrice, quantity, and category were added as required fields, with validation in place for certain types (e.g., number or string).
    - *Default Image and Enum Validation*
      - A default image URL was provided in the schema in case no images are uploaded. The category field was set up as an enum to ensure it can only take one of three values: male, female, or kids.
    - *Model Creation*
      - Using the schema, we created a ProductModel using Mongoose’s model method. This model is used to interact with the MongoDB database to store product data.
4. **Product Controller (Product.controller.js)**
    - *Handle Product Creation*
      - The createProductController is the core logic for handling product creation. It receives product data (e.g., title, description, price, etc.) and image files from the request body.
    -  *Handle Image Uploads*
       - For each uploaded image, we used the Cloudinary uploader.upload method to upload the file to Cloudinary’s cloud storage. Each file is uploaded individually, and once uploaded, we remove the local temporary file using fs.unlinkSync.
    - *Save Product Data*
      - After the images are uploaded and URLs are retrieved from Cloudinary, we save the product details to the database. The images are stored as an array of URLs in the product document.
    - *Error Handling*
       - Errors during the process, such as file upload issues (handled by multer) or server errors, are caught and responded to with appropriate error messages and status codes.
5. **Temporary Uploads Folder (temp-uploads)**
   - *Storage for Uploaded Files*
     - The temp-uploads folder is used to temporarily store files before they are processed and uploaded to Cloudinary. This folder is managed by the multer middleware to handle file storage.




## Milestone 11: Writing the GET Endpoint to Fetch Product Data from MongoDB

### Overview
This milestone focuses on creating an endpoint to fetch all product data from a MongoDB database and send it to the client.

### Key Objectives:
1. Write a GET endpoint to fetch product data from the database.
2. Test the endpoint to ensure it retrieves the required data correctly.

---

###  Backend: Writing the GET Endpoint

1. **Controller Implementation:**
   - Create a function in the controller to query the database for all product data using the product model.
   - Return the fetched data along with a success message.
   - Handle errors by sending an appropriate error message and status code.

2. **Route Definition:**
   - Define a GET route in the routes file.
   - Link the route to the controller function responsible for fetching product data.
   - Ensure proper response structure with HTTP status codes for both success and failure scenarios.

---

### Database Requirements
- Ensure MongoDB is properly connected to the application.
- Populate the database with sample product data for testing.
- Validate that the product schema aligns with the data structure being fetched by the endpoint.

---

### Testing the Endpoint
1. **Start the backend server:** Ensure the server is running and the endpoint is active.
2. **Verify the functionality:** Use tools like Postman to make GET requests to the `/get-products` endpoint.
   - Check if the response contains the product data.
   - Confirm that the success message is returned.
   - Test error handling by introducing potential failure scenarios (e.g., database connection issues).

3. **Database Validation:** Verify that the data returned by the endpoint matches the data stored in the MongoDB collection.

## Milestone 12: Product Display 

### Overview
- This milestone focuses on building an endpoint to send all product data to the frontend.
- The data will be fetched from a MongoDB database and displayed dynamically on the frontend using a product card component.

### 1.Backend Setup
#### 1.1 Endpoint Creation
- Create an endpoint `/product/get-products` to send all product data to the frontend.
- The endpoint will send the product data in a response format, including fields like title, image, description, price, and ratings.

#### 1.2 MongoDB Integration
- MongoDB is used to store product data.
- The backend will query MongoDB and retrieve all products and sending all available product data to the frontend.

#### 1.3 CORS Setup
- Cross-Origin Resource Sharing (CORS) is enabled to allow communication between the backend and frontend.
- This ensures that the frontend can access the backend data without security issues.

### 2. Frontend Setup
#### 2.1 State Management and Data Fetching
- A state variable (`data`) is used to store the fetched product data in the `HomePage.jsx` component.
- Use `axios` to send a GET request to the backend API endpoint (`http://localhost:8080/product/get-products`) to fetch all product data.
- The fetched data is stored in the `data` state variable.

#### 2.2 Dynamic Rendering
- The product data (title, image, description, price, etc.) is dynamically displayed by mapping through the `data` array.
- Each product’s details are passed as props to individual `Card` components.

#### 2.3 Displaying Data Dynamically
- The `HomePage.jsx` component maps through the `data` state and dynamically generates `Card` components for each product.
- The relevant product data (title, image, description, price, rating, etc.) is passed to the `Card` component as props.

#### 2.4 Card Component
- The `Card.jsx` component is responsible for displaying the product details.
  - The `Card` component receives props like `title`, `image`, `description`, `discountedPrice`, `originalPrice`, and `rating`.
  - It renders a stylized product card displaying the image, title, description, pricing, and rating.

### 3. Execution Flow
- When the homepage (`HomePage.jsx`) is loaded:
  1. The frontend sends a GET request to the backend to fetch all product data.
  2. The response data is stored in the state variable `data`.
  3. The `data` is passed to individual `Card` components, which display the product details dynamically.

### 4. Running Backend and Frontend
- To run the backend and frontend locally, follow these steps:
  1. **Start Backend**: In the backend project directory, run the following command:
     ```bash
     npm run dev
     ```
     This will start the backend server on `http://localhost:8080`.

  2. **Start Frontend**: In the frontend project directory, run the following command:
     ```bash
     npm run dev
     ```
     This will start the frontend server on `http://localhost:5173`.

  3. **Access Products Page**: Open your browser and navigate to `http://localhost:5173` to view the products page. The frontend will fetch product data from the backend and display it dynamically.

## Milestone 13: Product Updation 

### Overview
This milestone involves adding functionality to update existing product details. When clicked on  "Update" button on the product card, which will pre-fill the form with the current data. After making changes and submitting, the product data will be updated in the MongoDB database.
  
  ### Backend Changes:

1. **Added `updateProductController` method**:
   - Handles updating product details (title, description, rating, prices, quantity, category, and images).
   - Checks if the product exists before updating.
   - If new images are uploaded, they are processed and uploaded to Cloudinary, replacing the existing images.
   - Updates the product in the database using `findByIdAndUpdate`.

2. **Added `getSingleProductDocumentController` method**:
   - Fetches a single product by ID.
   - Provides the product details to pre-fill the form on the frontend.

3. **Created `PUT /update-products/:id` route**:
   - Maps to the `updateProductController` method for handling the product update request.
   - Accepts product data and images to update the existing product.

4. **Created `GET /get-single/:id` route**:
   - Maps to the `getSingleProductDocumentController` method for fetching a single product's details by ID.
   - Returns the data to auto-fill the update form on the frontend.

---
###  Frontend Changes:

1. **Created the Update Form (`UpdateForm` component)**:
   - Retrieves the current product data by ID using the `GET /get-single/:id` route and auto-fills the form.
   - Allows users to edit product details (title, description, price, etc.).
   - Supports file input for uploading new images.
   - Sends a `PUT` request with the updated product details and images to the backend for updating.

2. **Modified `handleChange` function**:
   - Updates the state of the form inputs dynamically as the user makes changes.
   - Manages form input values for fields such as title, description, discounted price, etc.

3. **Implemented image upload handling**:
   - Allows users to upload new images for the product, appending them to the form data before submission.

4. **Updated `handleSubmit` function**:
   - Collects all the form data and sends it to the backend in the form of `FormData`, including any new images or existing image URLs.

5. **Created routing for product update page**:
   - Added a new route `/update-form/:id` to handle navigation to the product update form, passing the product ID in the URL.
   - The route loads the `UpdateForm` component, which is responsible for fetching and submitting updated data.

## Milestone 14: Product Deletion

### Overview:

In Milestone 14, we implemented the functionality for deleting products. This includes a `DELETE` route in the backend to remove a product from the database by its `id`. On the frontend, a delete button is added to the product card. When clicked, the product's `id` is sent to the backend for deletion, and the frontend is updated to reflect the changes by fetching the updated list of products.

### Backend Changes:

1. **Added `deleteSingleProduct` in Product.controller.js**:
   - Fetches the product using the `id` from `req.params`.
   - If the product exists, it deletes the product from the database.
   - Returns the updated list of products after deletion.
   - If the product doesn't exist, it sends a 404 response with a "Product Not Found" message.

2. **Created `DELETE` route for product deletion**:
   - Adds a `DELETE` route to the `product.route.js` file.
   - The route takes the product `id` as a parameter and calls the `deleteSingleProduct` method to handle the deletion.

### Frontend Changes:

1. **Added delete button in `Card` component**:
   - A delete button (🗑️) is added next to the product information on the product card.
   - When clicked, it triggers the `handleDelete` function, passing the product `id`.

2. **Created `handleDelete` function**:
   - Sends a `DELETE` request to the backend with the product `id`.
   - After successful deletion, the product list is updated by fetching the latest data from the server.

3. **Modified `HomePage` component**:
   - Calls `handleDelete` when the delete button is clicked.
   - Updates the product list on the page by calling the API again after a successful deletion.


## MILESTONE 15: Responsive Navbar Component

### Overview

This project implements a **Responsive Navbar Component** using React. It facilitates smooth navigation across multiple pages in the application and ensures responsiveness on all screen sizes.


- Created a **Navbar Component** with navigation links for:
  - **Home**: The main landing page of the application.
  - **My Products**: A page to view the list of user-added products.
  - **Add Products**: A form to add new products to the application.
  - **Cart**: A page to view items added to the shopping cart.

- Made the **Navbar Responsive**:
  - Designed a horizontal layout for desktop users.
  - Implemented a hamburger menu for mobile users to display navigation links in a dropdown format.

- Added a **Mobile Menu Toggle**:
  - Used a hamburger icon that opens and closes the navigation menu on smaller screens.
  - The menu automatically closes when a link is clicked to enhance the user experience.

- Highlighted the **Active Navigation Link**:
  - Added dynamic styling to indicate the currently active page.

- Integrated the Navbar into all application pages:
  - Ensured smooth transitions between pages using **React Router**.

- Improved the mobile experience:
  - Focused on usability by making the menu visually appealing and interactive for smaller screens.


## MILESTONE 16 : Single Product Details Page & Image Modal Component

### Added Single Page Product Details

The Single Page Product Details feature displays detailed information about a specific product when a user clicks on it. The page includes the product image gallery, description, price, and action buttons such as "Add to Cart" and "Wishlist."

**Key Features:**
- **Product Image Gallery**: Displays product images, where users can click to view a larger version in a modal.
- **Product Information**: Shows the brand, title, rating, price, and discount information.
- **Action Buttons**: Allows users to add the product to the cart or wishlist.
- **Responsive Layout**: Uses Tailwind CSS to create a responsive layout that adapts to different screen sizes.

### Created Image Modal Component

The Image Modal component displays a larger version of the product images when clicked. It allows users to navigate between images using arrow buttons and view a slideshow of the product's images.

**Key Features:**
- **Image Viewer**: Displays the selected product image in full-screen mode.
- **Image Navigation**: Users can navigate between images using left and right arrow buttons.
- **Thumbnail Navigation**: Displays small thumbnails of all images at the bottom of the modal to indicate the current image.


## Routing in `App.jsx`

The product details page is accessed through the route `/product-details/:id`, where `:id` is the unique identifier of the product. The `SingleProductPage` component is rendered when this route is visited.


## Milestone 17 
This milestone focuses on setting up a foundational structure for the cart functionality and enable adding products to the cart.

- **Cart Schema (`cart.model.js`)**  
  Defines the structure for cart data in the database, including fields for `productId`, `quantity`, and `userId`.

- **Cart Route (`cart.route.js`)**  
  Creates the `/add-to-cart` endpoint and links it to the `AddToCartController`.

- **Cart Controller (`cart.controller.js`)**  
  Implements the logic for adding products to the cart:
  - Validates the `productId` and `userId`.
  - Checks if the product already exists in the user's cart.
  - Adds the product to the cart if all conditions are met.

- **Middleware (`jwt-verify.js`)**  
  Ensures only authorized users can access cart-related routes by verifying the user token and attaching the `userId` to the request.

- **Integration in `app.js`**  
  Registers the cart routes under the `/cart` path to make the cart-related endpoints functional.




