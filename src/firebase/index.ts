
import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDcIRUEKSblScEI1JTL_YVQUr__h2-O0a0",
    authDomain: "tradingplus-ee6fe.firebaseapp.com",
    databaseURL:
      "https://tradingplus-ee6fe-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "tradingplus-ee6fe",
    storageBucket: "tradingplus-ee6fe.appspot.com",
    messagingSenderId: "119488355341",
    appId: "1:119488355341:web:9e1ec5ea0682434fc14944",
    measurementId: "G-VQYHKB5TK3",
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export default firebase;