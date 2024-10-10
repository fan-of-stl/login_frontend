# Frontend Movie Application

This is a frontend application for managing user authentication and displaying a list of movies. It is built using Vue.js and Axios, and it communicates with a backend server for user registration, login, and fetching movie data.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [User Interface](#user-interface)
- [Contributing](#contributing)
- [License](#license)

## Features

- User registration and login.
- Alerts for previous sessions.
- Redirects to a movie list upon successful login.
- Fetches movies based on specific criteria (e.g., language, genre).
- Responsive design using Bootstrap.

## Technologies Used

- Vue.js
- Vue Router
- Axios
- Bootstrap
- HTML/CSS
- JavaScript

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/fan-of-stl/login_frontend.git
   cd login_frontend
   ```

2. **Install dependencies:**

   Make sure you have [Node.js](https://nodejs.org/) installed. Then run:

   ```bash
   npm install
   ```

## Configuration

1. **Set up the backend API URL:**

   In your `.env` file or directly in your code, configure the base URL for the backend API. For example:

   ```env
   VUE_APP_API_URL=http://localhost:9000/api
   ```

   Ensure that the backend server is running and accessible.

## Running the Application

1. **Start the development server:**

   ```bash
   npm run serve
   ```

2. **Open your browser and navigate to:**

   ```
   http://localhost:8080
   ```

## API Endpoints

The frontend communicates with the following API endpoints:

- **User Registration:**
  - **URL:** `POST /api/register`
  - **Body:**
    ```json
    {
      "name": "string",
      "email": "string",
      "phone": "string",
      "profession": "string",
      "password": "string"
    }
    ```

- **User Login:**
  - **URL:** `POST /api/login`
  - **Body:**
    ```json
    {
      "email": "string",
      "password": "string"
    }
    ```

- **Fetch Movie List:**
  - **URL:** `POST /api/movieList`
  - **Body:**
    ```json
    {
      "category": "movies",
      "language": "kannada",
      "genre": "all",
      "sort": "voting"
    }
    ```

## User Interface

- The application includes pages for user registration and login.
- Upon successful registration or login, users are redirected to the movie list.
- Alerts are displayed for any errors or previous login sessions.

