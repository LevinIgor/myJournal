import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase/";

export default async function (id, view) {
  if (id !== undefined && view !== undefined) {
    const postRef = doc(db, "posts", id.toString());
    await updateDoc(postRef, {
      views: view + 1,
    });
  }
}
