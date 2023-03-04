import { initializeApp } from "firebase/app";
import { getDatabase,ref,set,onValue } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyD4iQo9xVetmM5Crp01xpuflziagLGLSFU",
    authDomain: "nit-project-5b01a.firebaseapp.com",
    projectId: "nit-project-5b01a",
    storageBucket: "nit-project-5b01a.appspot.com",
    messagingSenderId: "603349165342",
    appId: "1:603349165342:web:620af2d3a406d90246550f",
    databaseURL:" https://nit-project-5b01a-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

