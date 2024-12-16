import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./firebaseConfig"; 

const signUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return { user: userCredential.user };
  } catch (error) {
    console.error("Error signing up: ", error);
    return { error: error.message };
  }
};

const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return { user: userCredential.user };
  } catch (error) {
    console.error("Error logging in: ", error);
    return { error: error.message };
  }
};

const logout = async () => {
  try {
    await signOut(auth);
    return { message: "User logged out" };
  } catch (error) {
    console.error("Error logging out: ", error);
    return { error: error.message };
  }
};

export { signUp, login, logout };
