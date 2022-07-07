import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/";

export default async function getPost(postId) {
  const docRef = doc(db, "posts", postId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log("Post not found");
    return null;
  }
}
