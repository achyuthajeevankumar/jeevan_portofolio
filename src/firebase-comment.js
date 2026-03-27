import { db } from "./firebase";
import { collection, addDoc, getDocs, query, orderBy, serverTimestamp } from "firebase/firestore";

const commentCollection = collection(db, "komentar");

export const getComments = async () => {
  try {
    const q = query(commentCollection, orderBy("createdAt", "desc"));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ 
      id: doc.id, 
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate() || new Date()
    }));
  } catch (error) {
    console.error("Error fetching comments:", error);
    return [];
  }
};

export const addComment = async (comment) => {
  try {
    await addDoc(commentCollection, {
      ...comment,
      createdAt: serverTimestamp()
    });
  } catch (error) {
    console.error("Error adding comment:", error);
    throw error;
  }
};
