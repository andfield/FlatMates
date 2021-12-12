import * as firebaseAdmin from "firebase-admin";

if (!firebaseAdmin.apps.length) {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert({
      privateKey: process.env.NEXT_PUBLIC_FIREBASE_PRIVATEKEY,
      clientEmail: process.env.NEXT_PUBLIC_FIREBASE_EMAIL,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTKEY,
    }),
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  });
}

export { firebaseAdmin };
