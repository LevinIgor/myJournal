import { doc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "@/firebase/";

export async function getPost(postId) {
  const docRef = doc(db, "posts", postId);
  const docSnap = await getDoc(docRef);
  return Promise.resolve(docSnap.data());
}

export async function createComment(comment) {
  const postRef = doc(db, "posts", comment.postId.toString());
  await updateDoc(postRef, {
    comments: arrayUnion(comment),
  });
  return Promise.resolve(true);
}
