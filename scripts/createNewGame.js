import { doc, setDoc } from "firebase/firestore";
import { db } from '../firebase/firebaseConfig'; 
import fetchDailyMovie  from './fetchDailyMovie';
import updateUserData from "./updateUserData";

const createNewGame = async (userEmail, date) => {
  try {
    const userRef = doc(db, "games", userEmail);
    let movieData = await fetchDailyMovie(date);

    if (movieData) {
      //console.log("Fetched movie:", movieData);
      console.log(`Fetched movie for:" ${date}`);
    } else {
      console.log("No movie found for the specified date.");
      movieData = {
        correct_movie: "Error fetching todays movie",
        finished: false
      };
    }

    const updateData = {
      [date]: {
        correct_movie : movieData,
        finished: false,
        guesses_title: [],
        guesses_id: [],
        gave_up: false

      }
    };

    await setDoc(userRef, updateData, { merge: true });

    console.log(`New game created for ${userEmail} on ${date}`);
  } catch (error) {
    console.error("Error creating new game:", error);
  }
};

export default createNewGame;
