import { db } from "./config";
import {
  doc,
  setDoc,
  getDoc,
  deleteDoc,
  updateDoc,
  collection,
  getDocs,
} from "firebase/firestore";

/**
 * Add a new document to a collection
 * @param {string} collectionName - The name of the Firestore collection
 * @param {object} docData - The data to be stored in the document
 */
export const addDocument = async (collectionName, docData) => {
  try {
    const docRef = doc(collection(db, collectionName));
    await setDoc(docRef, docData);
    console.log("Document added successfully");
  } catch (error) {
    console.error("Error adding document:", error);
  }
};

/**
 * Get a single document from a collection by its ID
 * @param {string} collectionName - The name of the Firestore collection
 * @param {string} docId - The ID of the document
 * @returns {object|null} - Document data if it exists, null otherwise
 */
export const getDocument = async (collectionName, docId) => {
  try {
    const docRef = doc(db, collectionName, docId);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? docSnap.data() : null;
  } catch (error) {
    console.error("Error getting document:", error);
  }
};

/**
 * Get all documents from a Firestore collection
 * @param {string} collectionName - The name of the Firestore collection
 * @returns {Array<object>} - Array of document objects
 */
export const getAllDocuments = async (collectionName) => {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching documents:", error);
  }
};

/**
 * Update a specific document in a collection
 * @param {string} collectionName - The name of the Firestore collection
 * @param {string} docId - The ID of the document to update
 * @param {object} updatedData - The updated data for the document
 */
export const updateDocument = async (collectionName, docId, updatedData) => {
  try {
    const docRef = doc(db, collectionName, docId);
    await updateDoc(docRef, updatedData);
    console.log("Document updated successfully");
  } catch (error) {
    console.error("Error updating document:", error);
  }
};

/**
 * Delete a document from a collection by its ID
 * @param {string} collectionName - The name of the Firestore collection
 * @param {string} docId - The ID of the document to delete
 */
export const deleteDocument = async (collectionName, docId) => {
  try {
    const docRef = doc(db, collectionName, docId);
    await deleteDoc(docRef);
    console.log("Document deleted successfully");
  } catch (error) {
    console.error("Error deleting document:", error);
  }
};
