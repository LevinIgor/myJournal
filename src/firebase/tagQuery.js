import { query, where, collection, getDocs, orderBy } from "firebase/firestore";
import { db } from "@/firebase/";

export default async function (tag) {
  if (tag && typeof tag === "string") {
    const q = query(
      collection(db, "posts"),
      where("tags", "array-contains", tag.toString())
    );

    const querySnapshot = await getDocs(q);

    let posts = [];
    querySnapshot.forEach((item) => {
      posts.push(item.data());
    });
    posts.reverse();
    return posts;
  } else {
    return -1;
  }
}
