import firebase from "firebase"
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyBrDtG6yCRdyBBAr8QHE02trZE455qSNzw",
    authDomain: "mercado-98f1b.firebaseapp.com",
    projectId: "mercado-98f1b",
    storageBucket: "mercado-98f1b.appspot.com",
    messagingSenderId: "751129474059",
    appId: "1:751129474059:web:085e90d8f292e32fca030e"
  };
  
  const app = firebase.initializeApp(firebaseConfig)

  export function getFirestore(){    
      return firebase.firestore(app)
  }
  