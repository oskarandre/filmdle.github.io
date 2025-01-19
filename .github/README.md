# FILMDLE

You can play the game at: [https://oskarandre.github.io/filmdle.github.io/](https://oskarandre.github.io/filmdle.github.io/)

![Preview Image](Preview.png)

We have created a game similiar to Wordle where the user can daily guess the correct movie.
The tools we used are Firebase, express, node and React, or FERN for short.

The project includes the following functions:
- User handling with login and signup using Firebase.
- API calls to the Movie Database for the user to search for a movie and also suggestion based on popularity.
- Movies with corresponding dates stored in Firebase for direct access.
- Directly updated user stats and guesses from the React web application to Firebase.
- Archive which makes it possible to play games from days before, with colors corresponding to game state (Finished, Started and Gave Up).
- Stats where the user can view their accumulated results such as games played, wins, average guesses etc.
- Feedback in the game in form of color coordinated clues by comparing all actors within the correct movie and the guessed movie.
- Hoverable names of actors and directors to view an image of the person.
- The ability to leave games to finish later or even give up if needed.

## Installation

To install dependencies, run the following commands:
```bash
npm install
npm i vite
npm i canvas-confetti
```






