// Import the functions you need from the SDKs you need

import firebase from 'firebase/app'
import 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-QD8HGEJmAl_Wb0xwvTR_OjSBHA_pOCg",
  authDomain: "portfolio-v2-a12fd.firebaseapp.com",
  projectId: "portfolio-v2-a12fd",
  storageBucket: "portfolio-v2-a12fd.appspot.com",
  messagingSenderId: "941162992088",
  appId: "1:941162992088:web:e1f792f70ccd75456ba2ad"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig)

const projectFirestore  = firebase.firestore()

export {projectFirestore}