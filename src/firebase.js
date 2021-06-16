import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyB8USg-OSSVhwLsobQnqyTNbolVfsnYNew",
    authDomain: "bmj-hotel.firebaseapp.com",
    projectId: "bmj-hotel",
    storageBucket: "bmj-hotel.appspot.com",
    messagingSenderId: "411832206892",
    appId: "1:411832206892:web:d073bd3ef11e896dc2f389"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;