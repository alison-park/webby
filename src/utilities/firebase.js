
import  getDatabase  from "firebase/database";
import  initializeApp  from "firebase/app";
import  getAnalytics  from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDB91g8eX2quBEv07Hn7EwcJZDySnaFp9U",
  authDomain: "webby-9ad4b.firebaseapp.com",
  databaseURL: "https://webby-9ad4b-default-rtdb.firebaseio.com",
  projectId: "webby-9ad4b",
  storageBucket: "webby-9ad4b.appspot.com",
  messagingSenderId: "1013195187601",
  appId: "1:1013195187601:web:6ad4be3384ae68f1836630",
  measurementId: "G-40WYQXBYSR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);