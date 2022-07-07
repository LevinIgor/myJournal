
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBhTWP7V871kNx-D5_BnxE369L_Qo3gAO8",
  authDomain: "myjournal-25e44.firebaseapp.com",
  projectId: "myjournal-25e44",
  storageBucket: "myjournal-25e44.appspot.com",
  messagingSenderId: "687517876460",
  appId: "1:687517876460:web:b757cfeaf872fdd3ca25c9"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export{db};