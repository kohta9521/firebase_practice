import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAxDW2UZYNnrxaL4sUIV26e6ykdsj0Hgk4",
  authDomain: "fir-react-tutorial-ed9c5.firebaseapp.com",
  projectId: "fir-react-tutorial-ed9c5",
  storageBucket: "fir-react-tutorial-ed9c5.appspot.com",
  messagingSenderId: "757228578996",
  appId: "1:757228578996:web:24c2b7b41a964a79120fe1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
