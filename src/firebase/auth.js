// firebase/auth.js
import { createUserWithEmailAndPassword, signOut, updateProfile, onAuthStateChanged } from "firebase/auth";
import { auth, storage } from "./config";  // Assuming you have the config file set up
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Sign-up with Profile Photo
export const signUpWithProfilePhoto = async (email, password, file) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    const storageRef = ref(storage, `profilePhotos/${user.uid}`);
    await uploadBytes(storageRef, file);

    const photoURL = await getDownloadURL(storageRef);

    await updateProfile(user, { photoURL });

    console.log("User signed up successfully:", user);
    return user;
  } catch (error) {
    console.error("Error signing up:", error);
    throw error;
  }
};

// Sign-out function
export const logout = async () => {
  try {
    await signOut(auth);
    console.log("User logged out successfully");
  } catch (error) {
    console.error("Error logging out:", error);
    throw error;
  }
};

// Listen for authentication state changes
export const listenAuthStateChange = (callback) => {
  return onAuthStateChanged(auth, callback);  // Firebase's auth state listener
};
