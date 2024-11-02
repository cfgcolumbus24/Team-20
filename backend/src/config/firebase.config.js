var admin = require("firebase-admin");

var adminAccount = require("../../firebaseAdminKey.json");

admin.initializeApp({
  credential: admin.credential.cert(adminAccount),
});

module.exports = admin;
