import { db } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";

export default async function getPosts() {
  const posts = [];
  const querySnapshot = await getDocs(collection(db, "posts"));
  querySnapshot.forEach((doc) => {
    posts.push(doc.data());
  });
  return posts;
}
