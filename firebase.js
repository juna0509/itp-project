import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";


const firebaseConfig = {
  apiKey:"AIzaSyCCRhQXfv19Cts5DFu17O_51TYv0y5QyYM",
  authDomain: "project-itp-7fe05.firebaseapp.com",
  projectId: "project-itp-7fe05",
  storageBucket:  "project-itp-7fe05.firebasestorage.app",
  messagingSenderId:"1071854762739",
  appId: "1:1071854762739:web:5185add94358e2cd869586",
};


const app = initializeApp(firebaseConfig);

 
export const auth = getAuth(app);
export const db = getFirestore(app);