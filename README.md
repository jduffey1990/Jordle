# Jordle - A Word Guessing Game
## About Jordle

Jordle is a fun and engaging word guessing game inspired by the popular game Wordle. Unlike Wordle, where the challenge is limited to five-letter words, Jordle spices things up by varying the word length between 5 to 7 letters, offering a dynamic and slightly more challenging experience.

In Jordle, players are tasked with guessing a hidden word within a limited number of attempts. After each guess, the game provides feedback on the letters - indicating if they are correct and in the right position (green), present in the word but in the wrong position (yellow), or not in the word at all (gray). This feedback allows players to refine their subsequent guesses.


## Key Features

- **Dynamic Word Lengths**: Words vary in length from 5 to 7 letters, adding a unique twist to the guessing game.
- **Interactive Feedback**: Each guess provides immediate color-coded feedback to help players deduce the word.
- **Learning Opportunity**: After successfully guessing the word, players are presented with an interesting tidbit related to it.

## Future Enhancements

- **User Authentication**: Implement user login functionality to track individual player progress.
- **Performance Statistics**: Analyze and display player performance, like the average number of guesses taken to solve the puzzle.


## Technologies Used

Jordle is built using a range of modern web technologies:

- **React (v18.2.0)**: A JavaScript library for building user interfaces.
- **Express (v4.18.2)**: Fast, unopinionated, minimalist web framework for Node.js.
- **Knex (v3.0.1)**: A flexible SQL query builder for PostgreSQL, MySQL, and SQLite3.
- **PostgreSQL (pg v8.11.3)**: An open-source relational database with an emphasis on extensibility and standards compliance.
- **Cors (v2.8.5)**: Node.js package for providing a Connect/Express middleware that can be used to enable CORS.
- **Dotenv (v16.3.1)**: Module that loads environment variables from a `.env` file into `process.env`.

The application's database is hosted on ElephantSQL, a cloud-based PostgreSQL database service.


## Getting Started

To run Jordle locally:

1. Clone the repository:
```
git clone https://github.com/jduffey1990/Jordle.git
```

2. Install dependencies:
```bash
cd backend
npm install
cd ../front
npm install
```

3. Start the application:
```
npm start
```

This runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload if you make edits, and you will see any lint errors in the console.

## **Hosting**
### **DB:**
- Tembo logged in with github
### **Site Servin:**
- Render logged in with git hub