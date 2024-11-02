// MVP, not function :)
import express from "express";
import { fetchEvent } from "../api.js";

const events = [
  "gV4RXwyHQh0gl7i8BtXP", // TODO: add event
]; // list of temp events to "recommend"
let index = events.length; // current "recommended events"

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    // cycle recommendations circularly
    index++;
    if (index >= events.length) {
      index = 0;
    }

    res.json(await fetchEvent(events[index]));
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
