import React from 'react';
import { doc, setDoc, increment, updateDoc } from 'firebase/firestore'; // Import necessary Firestore functions
import { db } from '../firebase/firebaseConfig';
import guessMovie from '../scripts/guessMovie.js'; // Import the guessMovie function

function GiveUp({ userEmail, date, handleMovieSelectById, correctMovieId, setIsFinished, setGaveUp, nGuesses}) {
  // Make sure to pass props as an object
  function setUserStats(userEmail, nGuesses) {
    // Reference to the game document in Firestore
    const userGameDocRef = doc(db, 'games', userEmail);
  
    const data = {
      "userData.gamesPlayed" : increment(1),
      "userData.total_guesses" : increment(nGuesses)
    };
  
    // Use updateDoc to merge specific fields without overwriting entire nested objects
    updateDoc(userGameDocRef, data)
      .then(() => {
        console.log('User game data updated successfully!');
      })
      .catch(error => {
        console.error('Error updating user game data:', error);
      });
  }

  async function giveUp(userEmail, date) {
    const userGameDocRef = doc(db, 'games', userEmail);

    const finalGameData = {
      [date]: {
        finished: true,
        gave_up: true
      },
    };

    try {
      await setDoc(userGameDocRef, finalGameData, { merge: true });
      console.log('The user gave up.');

      // Select the correct movie to show the answer
      const information = await handleMovieSelectById(correctMovieId);

      // Simulate guessing the correct movie
      await guessMovie(userEmail, date, information);

      // Mark the game as finished
      setIsFinished(true);
      setUserStats(userEmail, nGuesses);
      setGaveUp(true);
    } catch (error) {
      console.error('Error giving up:', error);
    }
  }

  return (
    <div className="give-up">
      <button className="btn-give-up" onClick={() => giveUp(userEmail, date)}>
        Give up? 
        <img className="skull-icon" src="\src\assets\skull-white.png" alt="skull-icon"/>
      </button>
    </div>
  );
}

export default GiveUp;