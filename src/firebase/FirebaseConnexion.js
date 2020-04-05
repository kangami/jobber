import Firebase from 'firebase';

let firebaseConfig = {
    apiKey: "AIzaSyCkCtNWwdiQTlj1nrHBrkBaBrXd-0auwqE",
    authDomain: "letjobing.firebaseapp.com",
    databaseURL: "https://letjobing.firebaseio.com",
    projectId: "letjobing",
    storageBucket: "letjobing.appspot.com",
    messagingSenderId: "537664441498",
    appId: "1:537664441498:web:06d5415901ddebaeffe323",
    measurementId: "G-BLZDHC9DL9"
  };

  // Initialize Firebase
  let app = Firebase.initializeApp(firebaseConfig);
  export const db = app.database();
  