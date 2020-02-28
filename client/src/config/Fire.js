import * as firebase from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC8LpSTFzPQRPbaT6S_j-CMDpfG-bZAzmU",
  authDomain: "fir-practice-f9dc5.firebaseapp.com",
  databaseURL: "https://fir-practice-f9dc5.firebaseio.com",
  projectId: "fir-practice-f9dc5",
  storageBucket: "fir-practice-f9dc5.appspot.com",
  messagingSenderId: "595935662062",
  appId: "1:595935662062:web:2fe6a0ea9256806bf6c8ff",
  measurementId: "G-HJ9FKY6D27"
};

const fire = firebase.initializeApp(config);

export default fire;
