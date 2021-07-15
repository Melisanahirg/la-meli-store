import firebase from 'firebase/app';
import '@firebase/firestore';


const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyAcIB6bGLXTbEJFZf2OTmeJETMRuWFpCY8",
    authDomain: "camada-17656.firebaseapp.com",
    projectId: "camada-17656",
    storageBucket: "camada-17656.appspot.com",
    messagingSenderId: "430007628717",
    appId: "1:430007628717:web:6b5913f72949a6aa392724"
  });


 export const getFirebase = () => {
      return firebaseConfig;
  }

  export const getFirestore = () => {
      return firebase.firestore(firebaseConfig)
  }
