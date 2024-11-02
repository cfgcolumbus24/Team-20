import admin from "firebase-admin";
import adminAccount from "../../firebaseAdminKey.json" assert { type: "json" };
import firebaseConfig from "../../firebaseConfig.json" assert { type: "json" };

export const firebaseAPIKey = firebaseConfig.apiKey;

admin.initializeApp({
  credential: admin.credential.cert(adminAccount),
});
export default admin;
