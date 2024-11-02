// MVP, not function :)
import express from "express";
import { fetchArtStyles } from "../api.js";

const router = express.Router();

router.get("/artStyles", async (req, res) => {
  try {
    res.json(await fetchArtStyles());
  } catch (error) {
    console.error("Fetch error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
