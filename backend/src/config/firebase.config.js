import firebaseAdmin from "firebase-admin";
import { initializeApp } from "firebase/app";
import adminAccount from "../../firebaseAdminKey.json" assert { type: "json" };
import firebaseConfig from "../../firebaseConfig.json" assert { type: "json" };

export const firebaseAPIKey = firebaseConfig.apiKey;
export const admin = firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(adminAccount),
});
export const app = initializeApp(firebaseConfig);
