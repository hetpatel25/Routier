# Routier - a trip advisor website

## Table of contents
* [Introduction](#introduction)
* [Milestones of Routier](#milestones-of-routier)
* [Installation Guide](#installation-guide)
  * [Repository Setup](#repository-setup)
  * [Backend Setup](#backend-setup)
  * [Frontend Setup](#frontend-setup)
* [Improtant Links](#improtant-links)
* [Contributors](#contributors)
* [License](#license)
  
----------------------------------

     
# Introduction  
- Routier is a Software to make your trip planning much better and tailored to your
taste.
- By getting to know you and where you want to go, we will suggest you places
for you to visit that you are most likely to enjoy.
- And the more you use Routier, the
better our recommendations will become.

----------------------------------
# Milestones of Routier
- Identified functional and non-functional requirements.
- Selected the appropriate tech stack for the website **[React, NodeJS]**.
- Created activity, sequence, and concept diagrams.
- Started prototype design in Figma.
- Developed the database to store data **[MongoDB]**.
- Implemented models, API routes, and controllers for all subjects in the backend.
- Simultaneously developed the corresponding frontend components.
- Deployed the frontend on **Vercel** and the backend on **Railway**.
- Improving website day by day as we see new bugs.
- Conducted various types of testing (GUI testing, non-functional testing) after the website was nearly developed.
  
----------------------------------

# Installation Guide

## Prerequisites

Ensure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/) (which includes npm)
- [Git](https://git-scm.com/)

## Repository Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/your-repo-name.git
    ```

2. Navigate into the project directory:

    ```bash
    cd your-repo-name
    ```

## Backend Setup

1. Navigate to the backend directory:

    ```bash
    cd backend
    ```

2. Install the backend dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the backend directory and configure your environment variables as needed. Example:

    ```env
    PORT=5000
    DB_CONNECTION_STRING=your_database_connection_string
    ```

4. Start the backend server:

    ```bash
    npm start
    ```

    The backend server should now be running on `http://localhost:5000`.

## Frontend Setup

1. Open a new terminal and navigate to the frontend directory:

    ```bash
    cd frontend
    ```

2. Install the frontend dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the frontend directory and configure your environment variables. Example:

    ```env
    REACT_APP_API_URL=http://localhost:5000
    ```

4. Start the frontend development server:

    ```bash
    npm start
    ```

    The frontend should now be running on `http://localhost:3000`.

## Accessing the Application

Open your web browser and navigate to `http://localhost:3000` to view the application.

## Common Issues

- Ensure both frontend and backend servers are running without errors.
- Check the console for any errors and follow the provided stack traces for debugging.
- Verify that the `.env` files are correctly configured.

----------------------------------

# Improtant Links  
Routier UI/UX: [Figma File](https://www.figma.com/file/7TcXpzmYLJZ0K9aL2BaTMU?type=design)

Video Explanation: [Youtube](https://www.youtube.com/watch?v=F-mnxUuyMbM)

Website Link: [https://my-routier.vercel.app/](https://my-routier.vercel.app/)

----------------------------------

# Contributors
[Anuj Contractor](https://github.com/anujcontractor)  
[Harsh Mungara](github.com/Harsh62004)  
[Priyanshu Gagiya](https://github.com/PriyanshuGagiya)  
[Dharmin Patel](https://github.com/Dharmin721)  
[Aaditya Makwana](https://github.com/Aaditya-Makwana)  
[Bansri Patel](https://github.com/IceStone16)  
[Het Patel](https://github.com/hetpatel25)  
[Mann Kataria](https://github.com/MannKataria)  
[Poojan Shah](https://github.com/PxbxShah)  
[Shwet Patel](https://github.com/Shwet-Patel)  
[Vishvas Solanki](https://github.com/Visvas-0440)  

----------------------------------
# License 
This project is licensed under the MIT License.
