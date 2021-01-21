import firebase from "firebase";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// };
// // Initialize Firebase
// const fb = firebase.initializeApp(firebaseConfig);

// export default fb;

var firebaseConfig = {
  apiKey: "AIzaSyBYUuUPFUXA14pX-Y3IU3hWJ_4TCoWCwI0",
  authDomain: "authnew-c7b31.firebaseapp.com",
  projectId: "authnew-c7b31",
  storageBucket: "authnew-c7b31.appspot.com",
  messagingSenderId: "659866505851",
  appId: "1:659866505851:web:6b9f256c13b0a93114c8de",
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
export default fb;
