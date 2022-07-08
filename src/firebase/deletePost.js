import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";

export default async function (id) {
  if (id) {
    return new Promise((resolve) => {
      deleteDoc(doc(db, "posts", id.toString())).catch((error) => {
        resolve(error);
      });
    });
  }
}
