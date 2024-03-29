import {
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
  arrayUnion,
  query,
  orderBy,
  getDocs,
  collection,
} from "firebase/firestore";
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

export async function getPosts(_orderBy = "id") {
  let posts = [];

  const q = query(collection(db, "posts"), orderBy(_orderBy, "desc"));

  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    posts.push(doc.data());
  });

  return Promise.resolve(posts);
}

export async function deletePost(id) {
  if (id) {
    return new Promise((resolve) => {
      deleteDoc(doc(db, "posts", id.toString())).then(() => {
        resolve(true);
      });
    });
  }
}
