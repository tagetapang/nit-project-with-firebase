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
// read function
function readuserdata(userid){
    const starCountRef = ref(db, 'users/' +  userid );
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
    });

}
// write function
function writeuserdata(userId, name, email) {
    const db = getDatabase();
    set(ref(db, 'users/' + userId), {
      username: name,
      email: email,
    });
  }

export {readuserdata,writeuserdata};
  
