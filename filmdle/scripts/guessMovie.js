import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from '../firebase/firebaseConfig';

const guessMovie = async (userEmail, date, information) => {
    try {
        const userRef = doc(db, "games", userEmail);
        const userDoc = await getDoc(userRef);
        if (userDoc.exists()) {
            const gameData = userDoc.data();
            // Check if a game exists for the specified date
            if (gameData[date]) {
                // Check for duplicate guesses
                if (gameData[date].guesses_title.includes(information.title)) {
                    console.log("You already guessed this movie!");
                    return;
                } else {
                    // Add guess to array
                    const updatedGuessTitle = [...gameData[date].guesses_title, information.title];
                    const updatedGuessId = [...gameData[date].guesses_id, information.id];

                    //console.log("updatedGuessID" , updatedGuessId)

                    await setDoc(userRef, {
                        [date]: {
                            ...gameData[date],
                            guesses_title: updatedGuessTitle,
                            guesses_id: updatedGuessId
                        }
                    }, { merge: true });
                }
            } else {
                console.log(`No game found for ${userEmail} on ${date}`);
            }
        } else {
            console.log(`User ${userEmail} not found.`);
        }
    } catch (error) {
        console.error("Error adding guess to game:", error);
    }
};

export default guessMovie;
