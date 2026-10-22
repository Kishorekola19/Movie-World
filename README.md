# 🎬 Movie World – Movie Discovery Web Application

Movie World is a full-stack movie discovery web application built using the MERN stack. It allows users to explore trending, popular, top-rated, and upcoming movies through a modern, responsive interface. Users can search for movies, view detailed movie information, securely create accounts, log in, and maintain a personalized watchlist.

🌐 **Live Demo:** [Movie World](https://movie-world-blush.vercel.app/)

---

## 📌 About the Project

Movie World brings movie discovery and personal watchlist management together in one place. It integrates the TMDB API to retrieve movie information, including posters, ratings, descriptions, and release details.

The application uses React.js for the frontend and Node.js with Express.js for the backend. MongoDB stores user accounts and watchlist data, while JWT authentication and password hashing help protect user information.

The project demonstrates full-stack web development, REST API integration, database management, and secure user authentication.

## ✨ Features

- 🎥 **Movie Discovery:** Explore trending, popular, top-rated, and upcoming movies.
- 🔍 **Movie Search:** Find movies by title.
- 📄 **Movie Details:** View movie descriptions, ratings, posters, and other available information.
- 🔐 **User Authentication:** Register and log in securely.
- ⭐ **Personalized Watchlist:** Save and manage favorite movies.
- 📱 **Responsive Design:** Browse the application on desktop, tablet, and mobile devices.
- 🔗 **TMDB Integration:** Fetch up-to-date movie information from an external API.
- ⚡ **Dynamic Interface:** Display movie data through an interactive React.js interface.

## 🛠️ Technology Stack

### Frontend
- React.js
- HTML5
- CSS3
- JavaScript (ES6)
- Axios

### Backend
- Node.js
- Express.js
- RESTful APIs

### Database
- MongoDB
- Mongoose

### Authentication & Security
- JSON Web Tokens (JWT)
- bcrypt.js

### External API
- The Movie Database (TMDB) API

### Deployment
- Vercel for the live frontend

## 🏗️ System Architecture

Movie World follows a client-server architecture in which the frontend communicates with the backend through API requests.

1. **Frontend:** React.js renders the interface and handles user interactions.
2. **Backend:** Node.js and Express.js process requests, manage authentication, and implement application logic.
3. **Database:** MongoDB stores user information and watchlist data.
4. **External API:** TMDB supplies movie information for discovery and browsing.

## 📂 Project Structure

```text
Movie-World/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── assets/
│   │   ├── services/
│   │   └── App.js
│   └── package.json
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── server.js
│   └── package.json
│
├── README.md
└── .gitignore
```

## 🚀 Getting Started

Follow these steps to run Movie World locally.

### Prerequisites

Install the following tools before starting:

- Node.js and npm
- MongoDB or a MongoDB Atlas account
- A TMDB API key

### 1. Clone the Repository

```bash
git clone https://github.com/sricharangoud/Movie-World.git
cd Movie-World
```

### 2. Set Up the Backend

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend/` directory:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secure_jwt_secret
TMDB_API_KEY=your_tmdb_api_key
```

Use the actual environment variable names expected by your application. Never commit real credentials to GitHub.

Start the backend using the script configured in your `backend/package.json`, for example:

```bash
npm start
```

### 3. Set Up the Frontend

Open a new terminal:

```bash
cd frontend
npm install
npm start
```

If your frontend uses Vite, use `npm run dev` instead.

### 4. Open the Application

Open the local URL displayed by your frontend development server. Ensure the backend and database are running and the API configuration is correct.

## 🔒 Security Considerations

- JWT-based authentication for protected operations.
- bcrypt.js for password hashing.
- Environment variables for sensitive configuration.
- Backend validation and authorization for user-specific operations.

Security measures should be verified against the actual implementation before deployment.

## 🌐 Live Application

Try the deployed application:

**[Open Movie World](https://movie-world-blush.vercel.app/)**

## 👨‍💻 Developer

**Sricharan Goud**

- 🌐 **Portfolio:** [Personal Portfolio](https://sricharangoud.github.io/Personal_Portfolio/)
- 💻 **GitHub:** [sricharangoud](https://github.com/sricharangoud)

## 🔮 Future Enhancements

- AI-powered movie recommendations.
- User reviews and ratings.
- Real-time movie discussion rooms.
- Advanced filters and genre-based search.
- Admin dashboard and analytics.
- Improved caching and performance optimization.

## 🎯 Conclusion

Movie World demonstrates how modern frontend and backend technologies can be combined to create an interactive movie discovery platform. By integrating React.js, Node.js, Express.js, MongoDB, JWT authentication, and the TMDB API, the project provides a practical full-stack application for exploring movies and managing personal watchlists.

---

⭐ **If you find this project useful, consider giving the repository a star on GitHub!**
