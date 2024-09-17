// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {
  getFirestore,
  collection,
  addDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3UH3McX3zITqH_m3QpvazBuHIp9T9R1Q",
  authDomain: "naturchem-6f313.firebaseapp.com",
  projectId: "naturchem-6f313",
  storageBucket: "naturchem-6f313.appspot.com",
  messagingSenderId: "290214506768",
  appId: "1:290214506768:web:a93084f62c5826f6393595",
  measurementId: "G-MHEFCHHVM5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const collectionRef = collection(db, "Images");
const storageRef = ref(storage);
const imagesRef = ref(storageRef, "imagesDB");

export {
    collection,
    addDoc,
    updateDoc,
    doc,
    db,
    collectionRef,
    storageRef,
    imagesRef,
    storage,
  };