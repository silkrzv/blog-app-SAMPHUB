# SAMP HUB - Blogging Platform

A simple blogging application built with Node.js, Express, and EJS templating engine. This project allows users to create, edit, and delete posts, with a clean user interface and a persistent background image for enhanced aesthetics.

## Features

- **Add Posts**: Users can create new posts by filling in a title and content.
- **Edit Posts**: Existing posts can be edited in a modal-like form that updates content in real-time.
- **Delete Posts**: Posts can be permanently deleted with a confirmation prompt.
- **Responsive Design**: Optimized for desktop and mobile use.

## Technologies Used

- **Node.js** and **Express** for server-side logic.
- **EJS** for rendering dynamic views.
- **CSS** and **Bootstrap** for styling and responsiveness.

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/username/your-repo-name.git
2. **Navigate to the Project Folder**:
   ```bash
   cd your-repo-name
3. **Install Dependencies**:
   ```bash
   npm install
4. **Start the Server**:
   ```bash
   npm start

By default, the application runs on http://localhost:3000.

## Usage

- **Home Page**: Shows recent posts with options to edit or delete.
- **Create Post**: Fill in the form at the top to add a new post.
- **Edit Post**: Click the "Edit" button on a post to modify its content.
- **Delete Post**: Click the "Delete" button to remove a post, with a confirmation prompt.

## Project Structure

- `routes/index.js`: Handles routing for creating, editing, and deleting posts.
- `views/`: Contains EJS templates for rendering pages.
- `public/`: Stores static files like CSS and images.


