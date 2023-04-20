import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDNgD5vRCC5tAJVOBFkenUZkBvpwg9EOzc",
  authDomain: "burj-al-arab-client0.firebaseapp.com",
  projectId: "burj-al-arab-client0",
  storageBucket: "burj-al-arab-client0.appspot.com",
  messagingSenderId: "790141426502",
  appId: "1:790141426502:web:eb8b7cebec1df8e302a347"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;