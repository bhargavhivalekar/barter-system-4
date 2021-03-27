import firebase from 'firebase';
require('@firebase/firestore')


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD7-pDBLmeI2wHIchPHWnLLF_SNj7xaKL8",
    authDomain: "barter-system-35454.firebaseapp.com",
    projectId: "barter-system-35454",
    storageBucket: "barter-system-35454.appspot.com",
    messagingSenderId: "1014347305213",
    appId: "1:1014347305213:web:4d88cb2d6fbb04ad88ae94"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
export default firebase.firestore();