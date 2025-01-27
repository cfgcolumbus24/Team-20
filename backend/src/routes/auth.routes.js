// Ideally, we'd separate out business layer, but for sake of time we're
// essentially saying yes to technical debt in order to get something done

import express from "express";
import { fetchUser, getId, isValid, setUser } from "../api.js";
import { firebaseAPIKey } from "../config/firebase.config.js";

const router = express.Router();

// https://firebase.google.com/docs/reference/rest/auth/#section-sign-in-email-password
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        error: "Missing required fields",
      });
    }

    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${firebaseAPIKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      }
    );

    const data = await response.json();
    const user = await fetchUser(data.localId);
    res.json({ ...user, token: data.idToken });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/user", async (req, res) => {
  try {
    const { token } = req.body;

    if (!token) {
      return res.status(400).json({
        error: "Missing required fields",
      });
    }

    const data = await getId(token);
    const user = await fetchUser(data.localId);
    res.json({ ...user });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// https://firebase.google.com/docs/reference/rest/auth/#section-create-email-password
router.post("/signup", async (req, res) => {
  try {
    const { email, password, name } = req.body;

    if (!email || !password || !name) {
      return res.status(400).json({
        error: "Missing required fields",
      });
    }

    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${firebaseAPIKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      }
    );

    const data = await response.json();
    setUser(data.localId, {
      email: email,
      name: name,
      pfp: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png",
      artStyles: [],
      cohorts: [],
      images: [],
      about: "",
      lookingFor: "",
    });
    const user = await fetchUser(data.localId);
    res.json({ ...user, token: data.idToken });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
