import { admin, adminDb } from "./config/firebase.config.js";

export async function fetchUser(localId) {
  try {
    const user = await adminDb.doc(`/users/${localId}`).get();
    return user.data();
  } catch (error) {
    throw error;
  }
}

export async function setUser(localId, data) {
  try {
    adminDb.doc(`/users/${localId}`).set(data);
    return await fetchUser(localId);
  } catch (error) {
    throw error;
  }
}

export async function isValid(localId, token) {
  try {
    const decoded = await admin.auth().verifyIdToken(token);
    return decoded.uid == localId;
  } catch (error) {
    throw error;
  }
}

export async function getId(token) {
  try {
    const ecoded = await admin.auth().verifyIdToken(token);
    return decoded.uid;
  } catch (error) {
    throw error;
  }
}

export async function fetchEvent(id) {
  try {
    const event = await adminDb.doc(`/events/${id}`).get();
    return event.data();
  } catch (error) {
    throw error;
  }
}
