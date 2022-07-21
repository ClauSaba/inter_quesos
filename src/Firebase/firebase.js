
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCjyPKTybnB1x1Q_rNXGRsqY_2uuW10Qko",
  authDomain: "interquesos.firebaseapp.com",
  projectId: "interquesos",
  storageBucket: "interquesos.appspot.com",
  messagingSenderId: "806243069438",
  appId: "1:806243069438:web:2ac970832b2056fb2124af"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)