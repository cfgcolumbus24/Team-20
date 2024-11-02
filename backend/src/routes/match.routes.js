// MVP, not function :)
import express from "express";
import { fetchUser } from "../api.js";

const matches = [
  "UD9o2R1HGQRlh1IJG1HTGcm4SME3",
  "AoqS4ZT1iPUeWJu03Y9ifEu4XLH2",
]; // list of temp user IDs to "match" with
let index = matches.length; // current "match"

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    // cycle matches
    index++;
    if (index >= matches.length) {
      index = 0;
    }

    res.json(await fetchUser(matches[index]));
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
