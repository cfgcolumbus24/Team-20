import { adminDb } from "./config/firebase.config.js";

export async function fetchUser(localId) {
  try {
    const user = await adminDb.doc(`/users/${localId}`).get();
    return await user.data();
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
