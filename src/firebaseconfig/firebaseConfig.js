import firebase from "firebase";


var firebaseConfig = {
    apiKey: "AIzaSyBar8LjzqrRMRtNr_38fDj1xZYxeUs0kgA",
    authDomain: "examdb-ad705.firebaseapp.com",
    projectId: "examdb-ad705",
    storageBucket: "examdb-ad705.appspot.com",
    messagingSenderId: "530865529525",
    appId: "1:530865529525:web:20b07b79b036689db614fc",
    measurementId: "G-X5W2ZFB113"
  };


firebase.initializeApp(firebaseConfig)

export const databaseRef = firebase.firestore();