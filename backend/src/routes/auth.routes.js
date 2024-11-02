// Ideally, we'd separate out business layer, but for sake of time we're
// essentially saying yes to technical debt in order to get something done

const express = require("express");
const router = express.Router();
const firebaseAPIKey = require("../config/apikeys.config.js");

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
    res.json(data);
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// https://firebase.google.com/docs/reference/rest/auth/#section-create-email-password
router.post("/signup", async (req, res) => {
  console.log("signup called");
});

module.exports = router;
