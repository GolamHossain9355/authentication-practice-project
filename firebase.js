import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const app = firebase.initializeApp({
  apiKey: process.env.React_APP_FIREBASE_API_KEY,
  authDomain: process.env.React_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.React_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.React_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.React_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.React_APP_FIREBASE_APP_ID,
  measurementId: process.env.React_APP_FIREBASE_MEASUREMENT_ID,
})
