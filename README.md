<!-- PROJECT LOGO -->
<br />
<p align="center">
  <!-- <a href="https://github.com/">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a> -->

  <h3 align="center">Glasskydd E-commerce -MERN</h3>

  <p align="center">
    This e-commerce has full featured shopping cart with PayPal payments. Product rating, reviews, product search, pagination. Admin area to manage customers, products and orders. Build with React, Redux, Node, Express and MongoDB.  
    <br />
    <br />
    · <a href="https://glasskydd.netlify.app/" target="_blank">View Demo</a>
    ·
    <a href="https://github.com/cimp08/ecommerce-fe" target="_blank">Frontend GitHub Repository</a>
    ·
    <a href="https://www.figma.com/file/uK1tRqiK8zJKoutFzgrMso/glasskydd?node-id=0%3A1" target="_blank">Figma Wire Frames</a>
    ·
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
      <li><a href="#deployment">Deployment</a></li>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#routes">Routes</a></li>
        <li><a href="#naming-conventions">Naming Conventions</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#requirements-specification">Requirements specification</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

The goal of this assignment was to create a e-commerce that uses the knowledge and skills required to go from an idea and concept phase to a complete application. The submission should demonstrate understanding of, application, and use of a RESTful API in node with JWT-based authentication with the MongoDB document database.

### Built With

- [React.js](https://reactjs.org/)
- [React Redux](https://react-redux.js.org/)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [NodeJS](https://nodejs.org/en/)
- [ExpressJS](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)

### Routes

The root path is: https://glasskydd-api.onrender.com
                                                                   

| Path | Type | Access | Body/Parameter |
| --- | --- | --- | --- |
| **Product** |
| Fetch all products or by keyword: <br>`/api/products?brand={brand}&keyword={keyword}&pageNumber={pageNumber}` | GET | Public | **Optional:** `brand`(string, i.e. Apple), `keyword`(string), `pageNumber`(number). **Returns** an object with products. |
| Get top rated products: <br>`/api/products/top` | GET | Public | Takes no arguments or data. **Returns** an array limited to five objects with top rated products. |
| Fetch single product: <br>`/api/products/{id}` | GET | Public | **Required:** `id`(string) **Returns**  object with product. |
| Create a product: <br>`/api/products` | POST | Private / Admin | **Required:** `Bearer token`.  **Returns**  object with a sample product. |
| Update product: <br>`/api/products/{id}` | PUT | Private / Admin | **Required:** `Bearer token`.<br> **Optional:** `name`(string), `price`(number), `user`(string), `image`(string), `brand`(string), `category`(string), `countInStock`(number), `numReviews`(number), `description`(string).<br> **Example body:**<br> `{ "name": "iPhone 12 Pro Max", "price": 69, "user": "631633f092f083de99b82af7", "image": "/images/sample.jpg", "brand": "Apple", "category": "Screenprotector", "countInStock": 5, "numReviews": 0, "description": "Protect the screen with..." }` <br>**Returns**  object with the updated product. |
| Delete a product: <br>`/api/products/{id}` | DELETE | Private / Admin | **Required:** `Bearer token`, `id`(string).  **Returns** message. |
| Create new review: <br>`/api/products/{id}/reviews` | POST | Private | **Required:** `Bearer token`, `rating`(number), `comment`(string).  **Returns** message. |
| **User** |
| Register a new user: <br>`/api/users` | POST | Public | **Required:** `name`(string), `email`(string), `password`(string).  **Returns** object with user (token included). |
| Auth user (login) & get token: <br> `/api/users/login` | POST | Public | **Required:** `email`(string), `password`(string).  **Returns** object with user (token included) |
| Get user profile: <br>`/api/users/{id}` | GET | Private | **Required:** `Bearer token`, `id`(string) **Returns**  object with user. |
| Update user profile: <br>`/api/users/profile` | PUT | Private | **Required:** `Bearer token`. **Optional:** `name`(string), `email`(string), `password`(string)  **Returns** object with (updated) user. |
| Update user: <br>`/api/users/{id}` | PUT | Private / Admin | **Required:** `Bearer token`, `isAdmin`(boolean) **Optional:** `name`(string), `email`(string). **Example body:** `{ "name": "Tom Crook", "email": "tomcrook@example.com", "isAdmin": true}` <br>**Returns**  object with the user. |
| Delete user: <br>`/api/users/{id}` | DELETE | Private / Admin | **Required:** `Bearer token`, `id`(string).  **Returns** message. |
| Get all users: <br>`/api/users` | GET | Private / Admin | **Required:** `Bearer token`. **Returns** an array with all users |
| Get user by id: <br>`/api/users/{id}` | GET | Private / Admin | **Required:** `Bearer token`, `id`(string).  **Returns** object with user (not password). |
| **Order** |
| Get logged in user orders: <br>`/api/orders/myorders` | GET | Private | **Required:** `Bearer token`. <br>**Returns** An array with orders. |
| Get order by id: <br>`/api/orders/{id}` | GET | Private | **Required:** `Bearer token`, `id`(string). <br>**Returns** object with order. |
| Create new order: <br>`/api/orders` | POST | Private | **Required:** `Bearer token`. <br>**Example / Required body:** <br>{"itemsPrice": 69,"orderItems": [{"countInStock": 10,"image": "/images/xiaomi-phone.webp","name": "Mi 12T/12T Pro","price": 69,"product":"632c55f725c2b5b032941554","qty": "1"}],"paymentMethod": "PayPal","shippingAddress": {"address":"Fredsgatan 6B","city": "Sundbyberg","country": "Sverige","postalCode": "17233"},"shippingPrice": 29,"taxPrice": "13.80","totalPrice": 98}<br>**Returns** object with order. |
| Get all orders: <br>`/api/orders` | GET | Private / Admin | **Required:** `Bearer token`. <br>**Returns** An array with all orders. |




### Deployment

Backend is deployed with Render’s free plan that automatically spun down after 15 minutes of inactivity. When a new request for a free service comes in, Render spins it up again so it can process the request.

This can cause a response delay of up to 30 seconds for the first request that comes in after a period of inactivity.

### Naming Conventions

| Name        | Example          | Usage                             |
| ----------- | ---------------- | --------------------------------- |
| camel case  | goesDownThenUp   | js pages, variables               |

<!-- GETTING STARTED -->

## Getting Started

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/cimp08/ecommerce-be
   ```
2. Install NPM packages (In the client and server folders)
   ```sh
   npm install
   ```
3. Create .env 
   ```JS
   PORT = 8000
   MONGO_URI = ENTER MONGO URI
   JWT_SECRET = ENTER SECRET 
   PAYPAL_CLIENT_ID = ENTER PAYPAL CLIENT ID
   ...
   ```
4. Run 
   ```sh
   npm run data:import
   ```
5. Run 
   ```sh
   npm start
   ```

<!-- Users -->

## Requirements specification

<!-- Add some user stories -->
### Non-functional requirements
* The application must provide a RESTful API.
* The application must work in all modern browsers.
* The application must be responsive.

### Functional requirements
* A user must be able to register an account.
* A user must be able to login to their account.
* A user must be able to search in the application.
* An administrative user must be able to log in to a basic dashboard and create/update/delete users.

### Bonus requirements implemented in this project
* A administrative user can log in to a basic dashboard and /create/read/update/delete products.
* A administrative user can log in to a basic dashboard and read/set to delivered/ orders.
* A register user can create/read and pay an order with PayPal Sandbox.
* A register user can create reviews on products.

<!-- ROADMAP -->

## Roadmap

GitHub Projects (Classic): [Sprint 1-4](https://github.com/cimp08/ecommerce-be/projects?query=is%3Aclosed&type=classic)

<!-- LICENSE -->

## License

Distributed under the MIT License.

<!-- CONTACT -->

## Contact

Email - cemilulay@gmail.com

LinkedIn: [Cemil Ülay](www.linkedin.com/in/cemilulay)