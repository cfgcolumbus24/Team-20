import admin from "firebase-admin";
import adminAccount from "../../firebaseAdminKey.json";

admin.initializeApp({
  credential: admin.credential.cert(adminAccount),
});

export default admin;
