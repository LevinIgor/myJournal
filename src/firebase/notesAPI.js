import {
  doc,
  setDoc,
  getDoc,
  orderBy,
  collection,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import { db } from "@/firebase/";

export async function createNote(note) {
  return new Promise((resolve) => {
    setDoc(doc(db, "notes", note.id.toString()), note).then(resolve(true));
  });
}

export async function getNotes(_orderBy = "id") {
  let list = [];

  const q = query(collection(db, "notes"), orderBy(_orderBy, "desc"));

  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    list.push(doc.data());
  });

  return Promise.resolve(list);
}

export async function getNote(id) {
  const docRef = doc(db, "notes", id);

  const docSnap = await getDoc(docRef);

  return Promise.resolve(docSnap.data());
}

export async function deleteNote(id) {
  if (id) {
    return new Promise(() => {
      deleteDoc(doc(db, "notes", id.toString())).then(() => {
        return;
      });
    });
  }
}
