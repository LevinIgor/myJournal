import { doc, setDoc } from "firebase/firestore";
import { db } from "@/firebase";

export default async function (post) {
  return new Promise((resolve) => {
    setDoc(doc(db, "posts", post.id.toString()), post)
      .then(() => {
        resolve(true);
      })
      .catch((error) => {
        resolve(error);
      });
  });
}
