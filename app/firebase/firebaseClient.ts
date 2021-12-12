import * as firebase from "firebase/compat/app";
import "firebase/compat/auth";

// AppConfig
const appConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// If the browser is still undefined and there is no firebase app create a new app.

if (typeof window !== "undefined" && !firebase.default.apps.length) {
  //App initialization
  firebase.default.initializeApp(appConfig);

  //Auth Initialization Current presistance is set for per session if you want hard presistance change SESSION to LOCAL
  firebase.default
    .auth()
    .setPersistence(firebase.default.auth.Auth.Persistence.SESSION);
}

export { firebase };
