import firebaseAdmin from "firebase-admin";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import adminAccount from "../../firebaseAdminKey.json" assert { type: "json" };
import firebaseConfig from "../../firebaseConfig.json" assert { type: "json" };

export const firebaseAPIKey = firebaseConfig.apiKey;
export const admin = firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(adminAccount),
});
export const adminDb = admin.firestore();
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
