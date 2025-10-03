// src/firebase/upload.js
import { storage } from "./config"; // Import Firebase storage instance
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Upload file to Firebase Storage
export const uploadFile = async (file, folderPath = "uploads/") => {
  try {
    if (!file) {
      console.error("No file selected");
      return;
    }

    console.log("Uploading file:", file); // Log file details for debugging

    // Create a reference to the storage location
    const storageRef = ref(storage, `${folderPath}${file.name}`);

    // Upload the file to Firebase Storage
    await uploadBytes(storageRef, file);
    console.log("File uploaded successfully.");

    // Get the download URL of the uploaded file
    const fileURL = await getDownloadURL(storageRef);
    console.log("File URL:", fileURL);

    return fileURL; // Return the download URL for further use
  } catch (error) {
    console.error("Error uploading file:", error.message); // Detailed error message
  }
};
