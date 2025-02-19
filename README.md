# Simple Greeting App

A full-stack application that demonstrates a simple greeting API using Node.js, Express, React, and Tailwind CSS. The project consists of a backend API that returns a personalized greeting and a React frontend where users can enter their name to receive the greeting.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)

## Features

- **Backend API:**
  - **Endpoint:** `GET /api/greet?name=YourName`
  - **Response:**
    - If `name` is provided:
      ```json
      { "message": "Hello, YourName! Welcome to Younglabs." }
      ```
    - If `name` is missing:
      ```json
      { "error": "Name is required." }
      ```

- **Frontend Application:**
  - An input field to enter a name.
  - A button labeled "Get Greeting" to fetch the greeting message.
  - Displays the greeting message or error response from the API.

## Tech Stack

- **Backend:** Node.js, Express
- **Frontend:** React, Tailwind CSS
- **Other Tools:** Create React App, PostCSS

## Project Structure

- **backend:** Contains the Express server code.
- **frontend:** Contains the React app with Tailwind CSS configuration.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/download/) (v12+)
- npm (Node Package Manager)

### Backend Setup

1. **Navigate to the `backend` folder:**

   ```bash
   cd backend
   npm install
   node index.js

### Frontend Setup

1. **Navigate to the `frontend` folder:**

   ```bash
   cd frontend
   npm install
   npm run dev
