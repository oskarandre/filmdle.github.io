import React, { useState, useEffect } from 'react';
import { setDoc, getDocs, collection, query, where, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import DailyGame from './DailyGame';
import createNewGame from '../scripts/createNewGame';

const UserGameData = ({ userEmail, date }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [correctMovieId, setCorrectMovieId] = useState(null);
  const [movieGuesses, setMovieGuesses] = useState(null);
  const [newGameCreated, setNewGameCreated] = useState(false);
  const [finishedGame, setFinishedGame] = useState(false);
  const [gaveUp, setGaveUp] = useState(false);
  


  useEffect(() => {
    const fetchUserGameData = async () => {
      try {
        const userGameDocRef = doc(db, "games", userEmail);

        const userGameDocSnap = await getDoc(userGameDocRef);

        if (userGameDocSnap.exists()) {
          // User's game document exists, check for the specific date
          const userGameData = userGameDocSnap.data();

          if (userGameData.hasOwnProperty(date)) {
            // Date exists, proceed with the existing daily game data
            setCorrectMovieId(userGameData[date].correct_movie.id);
            setMovieGuesses(userGameData[date].guesses_id);
            setFinishedGame(userGameData[date].finished);
            setGaveUp(userGameData[date].gave_up);

          } else {
            // Date doesn't exist, create a new entry for the date
            console.log(`No game data found for ${date}, creating new game for user ${userEmail}`);
            await createNewGame(userEmail, date);
            setNewGameCreated(true);
          }
        }
      } catch (error) {
        setError("Error fetching user game data");
        console.error("Error fetching user game data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserGameData();
  }, [userEmail, date, newGameCreated , correctMovieId]);

  useEffect(() => {
    if (correctMovieId !== null) {
      //console.log("Correct Movie ID updated: ", correctMovieId);
    }
  }, [correctMovieId]);

  useEffect(() => {
    if (movieGuesses !== null) {
      //console.log("Guesses updated: ", movieGuesses);
    }
  }, [movieGuesses]);


  if (isLoading) {
    return <p>Loading game data...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <DailyGame userEmail={userEmail} date={date} gameStatus={finishedGame} gaveUpStatus={gaveUp} correctMovieId={correctMovieId} movieGuesses={movieGuesses} />
    </div>
  );
};

export default UserGameData;
