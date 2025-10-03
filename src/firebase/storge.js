import { storage } from "./config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

/**
 * Uploads a file to Firebase Cloud Storage with progress tracking and validation
 * @param {File} file - The file to be uploaded
 * @param {string} folderPath - The folder path in Firebase Storage (default: "uploads/")
 * @param {Function} onProgress - A callback function to monitor the upload progress (optional)
 * @returns {Promise<string|null>} - Returns the file's download URL if successful, or null if there was an error
 */
export const uploadFile = async (file, folderPath = "uploads/", onProgress = null) => {
  try {
    if (!file) {
      console.error("No file selected");
      return null;
    }

    // Validate file type and size (optional)
    const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
    const maxSize = 10 * 1024 * 1024; // 10 MB

    if (!allowedTypes.includes(file.type)) {
      console.error("Invalid file type. Only JPEG, PNG, or GIF are allowed.");
      return null;
    }

    if (file.size > maxSize) {
      console.error("File size exceeds the 10MB limit.");
      return null;
    }

    console.log("Uploading file:", file); // Log file details for debugging

    // Create a reference to the storage location
    const storageRef = ref(storage, `${folderPath}${file.name}`);

    // Use uploadBytesResumable to enable progress tracking
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Monitor the progress if a callback is provided
    if (onProgress) {
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          onProgress(progress); // Pass the progress to the callback function
        },
        (error) => {
          console.error("Error during upload:", error.message);
        },
        async () => {
          // File uploaded successfully
          const fileURL = await getDownloadURL(storageRef);
          console.log("File uploaded successfully:", fileURL);
          return fileURL;
        }
      );
    } else {
      // If no progress callback is provided, upload without tracking progress
      await uploadBytes(storageRef, file);
      console.log("File uploaded successfully.");

      const fileURL = await getDownloadURL(storageRef);
      console.log("File URL:", fileURL);

      return fileURL;
    }
  } catch (error) {
    console.error("Error uploading file:", error);
    return null;
  }
};
