import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import 'firebase/analytics';

var config = {apiKey: "AIzaSyAKxG4iJubX1WMBC5iujh9bgbRj6RqLeSM",
authDomain: "net-sirius-dailyplan-276ff.firebaseapp.com",
databaseURL: "https://net-sirius-dailyplan-276ff.firebaseio.com",
projectId: "net-sirius-dailyplan-276ff",
storageBucket: "net-sirius-dailyplan-276ff.appspot.com",
messagingSenderId: "290349478115",
appId: "1:290349478115:web:004f4121728aa155a655d6",
measurementId: "G-Z2E7FYXX7H",
userProfile: "users"
};

// Initialize Firebase
try {
  firebase.initializeApp(config); 
}catch (err) {}
firebase.firestore();
// firebase.analytics();
firebase.auth();

export default firebase;








