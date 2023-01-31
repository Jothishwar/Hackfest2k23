// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyC4OHy9umNSeuDPZqHsGVO_Ev4qyNZoKhM",
  authDomain: "hackfest-edusync.firebaseapp.com",
  projectId: "hackfest-edusync",
  storageBucket: "hackfest-edusync.appspot.com",
  messagingSenderId: "352492426483",
  appId: "1:352492426483:web:849c89268bed80ce269386"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
