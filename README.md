# Note-Keeping Application

## Description

This project is a note-keeping web application inspired by Google Keep. It allows users to create, search, tag, archive, and trash notes. Users can also toggle between background colors for their notes. The application features user authentication and synchronization.

## Features

- **User Authentication and Content Sync**: Register and log in to sync notes across devices.
- **Create a New Note**: Add new notes with a title, content, tags, and background color.
- **Search in Your Notes**: Search through your notes using keywords.
- **Label View**: View all notes tagged with a specific label.
- **Archived Notes**: Archive notes to keep them out of the main view.
- **Multiple Tags**: Assign up to 9 tags to a single note.
- **Toggle Background Colors**: Change the background color of notes.
- **Trash Notes**: View notes deleted within the last 30 days.
- **Reminder View (Bonus)**: View all notes with an upcoming due date.

## Tech Stack

- **Backend**: Node.js, Express.js, MongoDB
- **Frontend**: HTML, CSS, JavaScript (with optional jQuery)
- **Authentication**: JWT (JSON Web Tokens)

## Project Structure

note-keeping-app/ │ ├── server.js ├── package.json ├── package-lock.json │ ├── models/ │ ├── Note.js │ └── User.js │ ├── routes/ │ ├── auth.js │ └── notes.js │ ├── middleware/ │ └── auth.js │ ├── controllers/ │ ├── authController.js │ └── noteController.js │ ├── config/ │ └── db.js │ ├── public/ │ ├── index.html │ ├── styles/ │ │ └── style.css │ ├── scripts/ │ │ └── app.js │ └── images/ │ └── .gitignore

bash Copy code

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/dhirajkumar0/Apsona-Backend-Assignment---Note-Maker.git
   cd note-keeping-app
   ```

JWT_SECRET=your_jwt_secret MONGO_URI=mongodb://localhost:27017/notes-app

node server.js Open your browser and navigate to http://localhost:3000.

API Endpoints Authentication POST /api/auth/register: Register a new user. POST /api/auth/login: Log in an existing user. Notes POST /api/notes: Create a new note. GET /api/notes: Get all notes. GET /api/notes/search: Search notes by query. PUT /api/notes/ /archive: Archive a note. PUT /api/notes/ /trash: Move a note to trash. GET /api/notes/trash: Get all trashed notes (deleted in the last 30 days). Bonus Features Special View - Reminder: View all notes with an upcoming due date. Video Demo: A video demonstration explaining the functionality of the app. License This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgements Inspired by Google Keep Built with Node.js, Express, and MongoDB

Feel free to customize the `README.md` file with additional details specific to your project and setup.
