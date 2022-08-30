import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA_lownkxxMGM7o7pX58e4wGYhjWRU1Jzo",
  authDomain: "proyecto-react-f5183.firebaseapp.com",
  projectId: "proyecto-react-f5183",
  storageBucket: "proyecto-react-f5183.appspot.com",
  messagingSenderId: "254576122918",
  appId: "1:254576122918:web:0dd497fa43763b59badae7",
  measurementId: "G-LSHYWGW2SD"
};

const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app)