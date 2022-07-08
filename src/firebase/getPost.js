import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/";

export default async function getPost(postId) {
  const docRef = doc(db, "posts", postId);
  const docSnap = await getDoc(docRef);
  return Promise.resolve(docSnap.data());
}
