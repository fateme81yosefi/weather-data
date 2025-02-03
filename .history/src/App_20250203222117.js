import logo from './logo.svg';
import './App.css';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Home from './Home/Home';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTrZ6kI_kxv2Y9yrJRjKaKcv_38BEtLZQ",
  authDomain: "weather-data-3c3c5.firebaseapp.com",
  projectId: "weather-data-3c3c5",
  storageBucket: "weather-data-3c3c5.firebasestorage.app",
  messagingSenderId: "978433756530",
  appId: "1:978433756530:web:5d23145635bc28276ee1eb",
  measurementId: "G-851GDGD6WF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

function App() {
  return (
    <div className="App">
      <Home/>
       
    </div>
  );
}

export default App;
